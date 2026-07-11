import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";
import API from "../api/api";

const AuthContext = createContext();

const USER_KEY = "taskmaster-user";
const TOKEN_KEY = "taskmaster-token";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================
  // Restore Session
  // =====================================

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const savedUser =
        localStorage.getItem(USER_KEY) ||
        sessionStorage.getItem(USER_KEY);

      const savedToken =
        localStorage.getItem(TOKEN_KEY) ||
        sessionStorage.getItem(TOKEN_KEY);

      if (!savedUser || !savedToken) {
        setLoading(false);
        return;
      }

      setUser(JSON.parse(savedUser));

      try {
        const response = await API.get("/users/profile");

        const latestUser = response.data.user;

        setUser(latestUser);

        if (localStorage.getItem(USER_KEY)) {
          localStorage.setItem(
            USER_KEY,
            JSON.stringify(latestUser)
          );
        } else {
          sessionStorage.setItem(
            USER_KEY,
            JSON.stringify(latestUser)
          );
        }
      } catch (error) {
        console.error(
          "Failed to fetch latest profile:",
          error
        );
      }
    } catch (error) {
      console.error(
        "Failed to restore session:",
        error
      );

      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(TOKEN_KEY);

      sessionStorage.removeItem(USER_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
    } finally {
      setLoading(false);
    }
  }

  // =====================================
  // Save Session
  // =====================================

  function saveSession(
    userData,
    token,
    remember = false
  ) {
    if (remember) {
      localStorage.setItem(
        USER_KEY,
        JSON.stringify(userData)
      );

      localStorage.setItem(
        TOKEN_KEY,
        token
      );

      sessionStorage.removeItem(USER_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
    } else {
      sessionStorage.setItem(
        USER_KEY,
        JSON.stringify(userData)
      );

      sessionStorage.setItem(
        TOKEN_KEY,
        token
      );

      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  // =====================================
  // Login
  // =====================================

  function login(
    userData,
    token,
    remember = false
  ) {
    const completeUser = {
      id: userData._id || userData.id,

      name: userData.name || "",

      email: userData.email || "",

      phone: userData.phone || "",

      university:
        userData.university ||
        "UET Mardan",

      role:
        userData.role ||
        "Computer Science Student",

      location:
        userData.location ||
        "Pakistan",

      bio:
        userData.bio || "",

      avatar:
        userData.avatar || "",
    };

    setUser(completeUser);

    saveSession(
      completeUser,
      token,
      remember
    );

    toast.success(
      `Welcome back, ${completeUser.name}!`
    );
  }

  // =====================================
  // Logout
  // =====================================

  function logout() {
    setUser(null);

    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);

    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(TOKEN_KEY);

    toast.success(
      "Logged out successfully."
    );
  }

  // =====================================
  // Update User Profile
  // =====================================

  async function updateUser(updatedUser) {
    try {
      const response = await API.put(
        "/users/profile",
        updatedUser
      );

      const latestUser = response.data.user;

      setUser(latestUser);

      if (localStorage.getItem(USER_KEY)) {
        localStorage.setItem(
          USER_KEY,
          JSON.stringify(latestUser)
        );
      } else {
        sessionStorage.setItem(
          USER_KEY,
          JSON.stringify(latestUser)
        );
      }

      toast.success(
        response.data.message ||
          "Profile updated successfully."
      );

      return latestUser;
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update profile."
      );

      throw error;
    }
  }

  // =====================================
  // Provider
  // =====================================

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,

        login,
        logout,
        updateUser,

        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// =====================================
// Custom Hook
// =====================================

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    );
  }

  return context;
}