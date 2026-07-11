import { useState } from "react";

import {
  UserCircle,
  Moon,
  Database,
  Info,
  CheckCircle2,
  Clock3,
  Mail,
  Briefcase,
  Shield,
  Bell,
  Lock,
  Download,
  Trash2,
  LogOut,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import toast from "react-hot-toast";

import API from "../api/api";

import Card from "../components/ui/Card";
import ThemeToggle from "../components/layout/ThemeToggle";

import { useTasks } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";

function Settings() {

  const { tasks } = useTasks();

  const { user, logout } = useAuth();

  const completed = tasks.filter(
    (task) =>
      task.completed ||
      task.status === "Completed"
  ).length;

  const pending =
    tasks.length - completed;

  const productivity =
    tasks.length === 0
      ? 0
      : Math.round(
          (completed / tasks.length) * 100
        );

  const [notifications, setNotifications] =
    useState(true);

  const [
    emailNotifications,
    setEmailNotifications,
  ] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [savingPassword, setSavingPassword] =
    useState(false);

  const [passwords, setPasswords] =
    useState({
      current: "",
      new: "",
      confirm: "",
    });

  // =====================================
  // Password Input Change
  // =====================================

  function handlePasswordChange(e) {

    setPasswords((prev) => ({

      ...prev,

      [e.target.name]:
        e.target.value,

    }));

  }

  // =====================================
  // Update Password
  // =====================================

  async function savePassword() {

    if (!passwords.current) {

      toast.error(
        "Current password is required."
      );

      return;

    }

    if (!passwords.new) {

      toast.error(
        "New password is required."
      );

      return;

    }

    if (passwords.new.length < 6) {

      toast.error(
        "Password must contain at least 6 characters."
      );

      return;

    }

    if (
      passwords.new !==
      passwords.confirm
    ) {

      toast.error(
        "Passwords do not match."
      );

      return;

    }

    try {

      setSavingPassword(true);

      const response =
        await API.put(
          "/users/change-password",
          {
            currentPassword:
              passwords.current,

            newPassword:
              passwords.new,
          }
        );

      toast.success(
        response.data.message ||
          "Password updated successfully."
      );

      setPasswords({
        current: "",
        new: "",
        confirm: "",
      });

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update password."
      );

    } finally {

      setSavingPassword(false);

    }

  }

  // =====================================
  // Export Tasks
  // =====================================

  function exportTasks() {

    const blob = new Blob(
      [JSON.stringify(tasks, null, 2)],
      {
        type: "application/json",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "tasks.json";

    link.click();

    toast.success(
      "Tasks exported successfully."
    );

  }

  // =====================================
  // Clear Tasks
  // =====================================

  function clearTasks() {

    const ok = window.confirm(
      "Delete all tasks?"
    );

    if (!ok) return;

    localStorage.removeItem(
      "taskmaster-tasks"
    );

    window.location.reload();

  }

  // =====================================
  // Logout
  // =====================================

  function handleLogout() {

    logout();

    toast.success(
      "Logged out successfully."
    );

  }

  return (

    <div className="space-y-8">
      {/* =====================================
          Header
      ===================================== */}

      <Card>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">

          Settings

        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">

          Manage your account, appearance, security and application preferences.

        </p>

      </Card>

      {/* =====================================
          Top Grid
      ===================================== */}

      <div className="grid gap-6 xl:grid-cols-2">

        {/* =====================================
            Profile
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-5">

            {user?.avatar ? (

              <img
                src={user.avatar}
                alt={user.name}
                className="
                  h-24
                  w-24
                  rounded-full
                  border-4
                  border-blue-500
                  object-cover
                  shadow-xl
                "
              />

            ) : (

              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  text-4xl
                  font-bold
                  text-white
                  shadow-xl
                "
              >

                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : "G"}

              </div>

            )}

            <div className="flex-1">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >

                {user?.name || "Guest"}

              </h2>

              <p
                className="
                  mt-1
                  text-slate-500
                  dark:text-slate-400
                "
              >

                {user?.role || "Computer Science Student"}

              </p>

            </div>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-3">

              <Mail
                size={18}
                className="text-slate-500"
              />

              <span className="text-slate-700 dark:text-slate-300">

                {user?.email || "guest@taskmaster.com"}

              </span>

            </div>

            <div className="flex items-center gap-3">

              <Briefcase
                size={18}
                className="text-slate-500"
              />

              <span className="text-slate-700 dark:text-slate-300">

                {user?.role || "Student"}

              </span>

            </div>

          </div>

        </Card>

        {/* =====================================
            Appearance
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-3">

            <Moon className="text-indigo-600 dark:text-indigo-400" />

            <h2
              className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >

              Appearance

            </h2>

          </div>

          <p
            className="
              mt-3
              text-slate-500
              dark:text-slate-400
            "
          >

            Customize how Task Master looks.

          </p>

          <div
            className="
              mt-8
              flex
              items-center
              justify-between
              rounded-2xl
              bg-slate-100
              p-5

              dark:bg-slate-800
            "
          >

            <div>

              <p
                className="
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >

                Theme

              </p>

              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >

                Switch between Light and Dark mode.

              </p>

            </div>

            <ThemeToggle />

          </div>

        </Card>

      </div>

      {/* =====================================
          Notifications & Security
      ===================================== */}

      <div className="grid gap-6 xl:grid-cols-2">
        {/* =====================================
            Notifications
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-3">

            <Bell className="text-yellow-500" />

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Notifications

            </h2>

          </div>

          <p className="mt-3 text-slate-500 dark:text-slate-400">

            Control how Task Master notifies you.

          </p>

          <div className="mt-8 space-y-5">

            <label className="flex items-center justify-between">

              <div>

                <p className="font-semibold text-slate-900 dark:text-white">

                  Enable Notifications

                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">

                  Receive task reminders.

                </p>

              </div>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
                className="h-5 w-5 accent-blue-600"
              />

            </label>

            <label className="flex items-center justify-between">

              <div>

                <p className="font-semibold text-slate-900 dark:text-white">

                  Email Notifications

                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">

                  Receive updates by email.

                </p>

              </div>

              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() =>
                  setEmailNotifications(
                    !emailNotifications
                  )
                }
                className="h-5 w-5 accent-blue-600"
              />

            </label>

          </div>

        </Card>

        {/* =====================================
            Security
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-3">

            <Shield className="text-red-500" />

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Security

            </h2>

          </div>

          <p className="mt-3 text-slate-500 dark:text-slate-400">

            Update your account password securely.

          </p>

          <div className="mt-6 space-y-5">

            {/* Current Password */}

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Current Password"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  py-3
                  pl-12
                  pr-12
                  outline-none
                  focus:border-blue-500
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            {/* New Password */}

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="new"
              value={passwords.new}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                focus:border-blue-500
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

            {/* Confirm Password */}

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="Confirm Password"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                focus:border-blue-500
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

            <button
              type="button"
              onClick={savePassword}
              disabled={savingPassword}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                transition-all

                hover:bg-blue-700

                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {savingPassword ? (

                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Updating Password...
                </>

              ) : (

                <>
                  <Shield size={18} />
                  Update Password
                </>

              )}

            </button>

          </div>

        </Card>

      </div>

      {/* =====================================
          Statistics & Data Management
      ===================================== */}

      <div className="grid gap-6 xl:grid-cols-2">
        {/* =====================================
            Task Statistics
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-3">

            <Database className="text-green-600 dark:text-green-400" />

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Task Statistics

            </h2>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-center justify-between">

              <span className="text-slate-500 dark:text-slate-400">

                Total Tasks

              </span>

              <span className="font-bold text-slate-900 dark:text-white">

                {tasks.length}

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-slate-500 dark:text-slate-400">

                Completed

              </span>

              <span className="font-bold text-green-600">

                {completed}

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-slate-500 dark:text-slate-400">

                Pending

              </span>

              <span className="font-bold text-orange-500">

                {pending}

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-slate-500 dark:text-slate-400">

                Productivity

              </span>

              <span className="font-bold text-blue-600">

                {productivity}%

              </span>

            </div>

          </div>

        </Card>

        {/* =====================================
            Data Management
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-3">

            <Database className="text-purple-600 dark:text-purple-400" />

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Data Management

            </h2>

          </div>

          <p className="mt-3 text-slate-500 dark:text-slate-400">

            Export or remove your application data.

          </p>

          <div className="mt-8 space-y-4">

            <button
              onClick={exportTasks}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                transition-all

                hover:bg-blue-700
              "
            >

              <Download size={18} />

              Export Tasks

            </button>

            <button
              onClick={clearTasks}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-red-500
                py-3
                font-semibold
                text-white
                transition-all

                hover:bg-red-600
              "
            >

              <Trash2 size={18} />

              Clear All Tasks

            </button>

          </div>

        </Card>

      </div>

      {/* =====================================
          About Task Master
      ===================================== */}

      <div className="grid gap-6 xl:grid-cols-2">

        <Card hover>

          <div className="flex items-center gap-3">

            <Info className="text-cyan-600 dark:text-cyan-400" />

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              About Task Master

            </h2>

          </div>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">

            Task Master is a modern productivity application built using
            React, Tailwind CSS, Node.js, Express.js and MongoDB.
            It helps users organize work, track productivity and
            manage projects efficiently with a clean and modern interface.

          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-500/15 dark:text-green-400">

              <CheckCircle2 size={16} />

              React

            </div>

            <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">

              <Clock3 size={16} />

              Version 2.0

            </div>

            <div className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-500/15 dark:text-purple-400">

              <Database size={16} />

              MongoDB

            </div>

          </div>

        </Card>
        {/* =====================================
            Account
        ===================================== */}

        <Card hover>

          <div className="flex items-center gap-3">

            <LogOut className="text-red-600 dark:text-red-400" />

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

              Account

            </h2>

          </div>

          <p className="mt-3 text-slate-500 dark:text-slate-400">

            Manage your account session.

          </p>

          <div className="mt-8 space-y-4">

            <button
              onClick={handleLogout}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-red-500
                py-3
                font-semibold
                text-white
                transition-all
                hover:bg-red-600
              "
            >

              <LogOut size={18} />

              Logout

            </button>

          </div>

        </Card>

      </div>

      {/* =====================================
          Developer
      ===================================== */}

      <Card hover>

        <div className="flex items-center gap-3">

          <UserCircle
            className="text-blue-600 dark:text-blue-400"
          />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

            Developer

          </h2>

        </div>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between">

            <span className="text-slate-500 dark:text-slate-400">

              Developer

            </span>

            <span className="font-semibold text-slate-900 dark:text-white">

              Tahir Ullah Khan

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500 dark:text-slate-400">

              University

            </span>

            <span className="font-semibold text-slate-900 dark:text-white">

              UET Mardan

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500 dark:text-slate-400">

              Degree

            </span>

            <span className="font-semibold text-slate-900 dark:text-white">

              BS Computer Science

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500 dark:text-slate-400">

              Backend

            </span>

            <span className="font-semibold text-slate-900 dark:text-white">

              Node.js + Express.js

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500 dark:text-slate-400">

              Frontend

            </span>

            <span className="font-semibold text-slate-900 dark:text-white">

              React + Tailwind CSS

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500 dark:text-slate-400">

              Database

            </span>

            <span className="font-semibold text-green-600">

              MongoDB

            </span>

          </div>

        </div>

      </Card>

      {/* =====================================
          Footer
      ===================================== */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          text-center
          shadow-sm

          dark:border-slate-800
          dark:bg-slate-900
        "
      >

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">

          Task Master

        </h3>

        <p className="mt-2 text-slate-500 dark:text-slate-400">

          Built with ❤️ using React, Tailwind CSS,
          Node.js, Express.js and MongoDB.

        </p>

        <p className="mt-1 text-sm text-slate-400">

          © 2026 Tahir Ullah Khan. All Rights Reserved.

        </p>

      </div>

    </div>
  );
}

export default Settings;