import { useEffect, useRef } from "react";
import {
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function UserMenu({ open, onClose }) {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [onClose]);

  function handleProfile() {
    navigate("/profile");

    onClose();
  }

  function handleSettings() {
    navigate("/settings");

    onClose();
  }

  function handleLogout() {
    logout();

    onClose();

    navigate("/login", {
      replace: true,
    });
  }

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className="
        absolute
        right-0
        top-16
        z-50
        w-80
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-2xl

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}

      <div className="border-b border-slate-200 p-6 dark:border-slate-700">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-md">

            {user?.name?.charAt(0).toUpperCase() || "G"}

          </div>

          <div className="min-w-0">

            <h3 className="truncate text-xl font-bold text-slate-900 dark:text-white">

              {user?.name || "Guest"}

            </h3>

            <p className="truncate text-sm text-slate-500 dark:text-slate-400">

              {user?.email || "guest@taskmaster.com"}

            </p>

            <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">

              {user?.role || "Computer Science Student"}

            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="p-3">

        <button
          onClick={handleProfile}
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            text-left
            text-slate-700
            transition-all
            duration-200

            hover:bg-slate-100

            dark:text-slate-300
            dark:hover:bg-slate-800
          "
        >
          <User size={20} />

          <span className="font-medium">
            My Profile
          </span>

        </button>

        <button
          onClick={handleSettings}
          className="
            mt-1
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            text-left
            text-slate-700
            transition-all
            duration-200

            hover:bg-slate-100

            dark:text-slate-300
            dark:hover:bg-slate-800
          "
        >
          <Settings size={20} />

          <span className="font-medium">
            Settings
          </span>

        </button>

        <div className="my-3 border-t border-slate-200 dark:border-slate-700"></div>

        <button
          onClick={handleLogout}
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            text-left
            text-red-600
            transition-all
            duration-200

            hover:bg-red-50

            dark:text-red-400
            dark:hover:bg-red-500/10
          "
        >
          <LogOut size={20} />

          <span className="font-medium">
            Logout
          </span>

        </button>

      </div>

    </div>
  );
}

export default UserMenu;