import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import PasswordInput from "../components/auth/PasswordInput";

import { useAuth } from "../context/AuthContext";

const API_URL = "http://localhost:5000/api";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      toast.error("Please fix the highlighted fields.");

      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      const data = response.data;

      // Save JWT Token
      localStorage.setItem("token", data.token);

      // Save User
      login(data.user, rememberMe);

      toast.success(`Welcome back, ${data.user.name}!`);

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue managing your tasks."
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Create Account"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);

            if (errors.email) {
              setErrors((prev) => ({
                ...prev,
                email: "",
              }));
            }
          }}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);

            if (errors.password) {
              setErrors((prev) => ({
                ...prev,
                password: "",
              }));
            }
          }}
        />

        {errors.password && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors.password}
          </p>
        )}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
              className="h-4 w-4 rounded border-slate-300 text-blue-600"
            />

            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          fullWidth
          size="lg"
        >
          Sign In
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;