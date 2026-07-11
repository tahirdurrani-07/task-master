import {
  Bell,
  Search,
  Menu,
  CalendarDays,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import ThemeToggle from "./ThemeToggle";
import NotificationDropdown from "./NotificationDropdown";
import UserMenu from "./UserMenu";

import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../context/TaskContext";
import { useNotifications } from "../../context/NotificationContext";

function Topbar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const { search, setSearch } = useTasks();

  const { user } = useAuth();

  const { unreadCount } = useNotifications();

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showUserMenu, setShowUserMenu] =
    useState(false);

  const notificationRef = useRef(null);

  const userMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setShowUserMenu(false);
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
  }, []);

  /* ---------- Greeting ---------- */

  const currentHour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (currentHour < 12) {
    greeting = "Good Morning ☀️";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon 👋";
  }

  /* ---------- Current Date ---------- */

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <header
  className="
    sticky
    top-0
    z-30

    h-20

    border-b
    border-slate-200/70

    bg-white/80

    backdrop-blur-2xl

    transition-all
    duration-300

    dark:border-slate-800
    dark:bg-slate-950/80
  "
>
  <div
    className="
      mx-auto

      flex
      h-full
      items-center
      justify-between

      px-4

      lg:px-8
    "
  >

    {/* ========================= */}
    {/* Left Side */}
    {/* ========================= */}

    <div className="flex items-center gap-5">

      {/* Mobile Menu */}

      <button
        type="button"
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-2xl

          border
          border-slate-200

          bg-white

          shadow-sm

          transition-all
          duration-300

          hover:scale-105
          hover:bg-slate-100
          hover:shadow-md

          active:scale-95

          dark:border-slate-700
          dark:bg-slate-900
          dark:hover:bg-slate-800

          lg:hidden
        "
      >
        <Menu size={22} />
      </button>

      {/* Logo */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-3xl

            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-cyan-500

            text-xl
            font-black
            text-white

            shadow-xl
          "
        >
          TM
        </div>

        <div className="hidden sm:block">

          <h1
            className="
              text-2xl
              font-black
              tracking-tight

              text-slate-900

              dark:text-white
            "
          >
            Task Master
          </h1>

          <div className="mt-1 flex items-center gap-3">

            <span
              className="
                text-sm
                font-medium

                text-slate-500

                dark:text-slate-400
              "
            >
              {greeting}
            </span>

            <span
              className="
                h-1.5
                w-1.5

                rounded-full

                bg-blue-500
              "
            />

            <div
              className="
                flex
                items-center
                gap-2

                rounded-full

                bg-blue-50

                px-3
                py-1

                text-xs
                font-semibold

                text-blue-700

                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >

              <CalendarDays size={14} />

              {today}

            </div>

          </div>

        </div>

      </div>

    </div>
    {/* ========================= */}
    {/* Search */}
    {/* ========================= */}

    <div className="hidden flex-1 justify-center px-6 lg:flex">

      <div className="relative w-full max-w-3xl">

        {/* Search Icon */}

        <Search
          size={20}
          className="
            pointer-events-none

            absolute
            left-5
            top-1/2

            -translate-y-1/2

            text-slate-400

            dark:text-slate-500
          "
        />

        {/* Search Input */}

        <input
          type="text"
          placeholder="Search tasks, projects or keywords..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            h-14
            w-full

            rounded-2xl

            border
            border-slate-200

            bg-white/80

            pl-14
            pr-24

            text-[15px]
            text-slate-900

            placeholder:text-slate-400

            shadow-sm

            backdrop-blur-xl

            transition-all
            duration-300

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            focus:shadow-lg

            dark:border-slate-700
            dark:bg-slate-900/80
            dark:text-white
            dark:placeholder:text-slate-500
            dark:focus:border-blue-500
            dark:focus:ring-blue-900/30
          "
        />

        {/* Ctrl + K */}

        <div
          className="
            absolute
            right-4
            top-1/2

            hidden

            -translate-y-1/2

            items-center
            gap-1

            rounded-xl

            border
            border-slate-200

            bg-slate-50

            px-3
            py-1.5

            text-xs
            font-semibold

            text-slate-500

            shadow-sm

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-400

            xl:flex
          "
        >

          <kbd
            className="
              rounded
              bg-white
              px-1.5
              py-0.5

              dark:bg-slate-700
            "
          >
            Ctrl
          </kbd>

          <span>+</span>

          <kbd
            className="
              rounded
              bg-white
              px-1.5
              py-0.5

              dark:bg-slate-700
            "
          >
            K
          </kbd>

        </div>

      </div>

    </div>
    {/* ========================= */}
    {/* Right Side */}
    {/* ========================= */}

    <div className="flex items-center gap-3">

      {/* Notification */}

      <div
        className="relative"
        ref={notificationRef}
      >

        <button
          type="button"
          title="Notifications"
          onClick={() =>
            setShowNotifications(
              (prev) => !prev
            )
          }
          className="
            group

            relative

            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-2xl

            border
            border-slate-200

            bg-white/80

            shadow-sm

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-xl
            hover:border-blue-300

            active:scale-95

            dark:border-slate-700
            dark:bg-slate-900/80
            dark:hover:border-blue-500
          "
        >

          <Bell
            size={20}
            className="
              text-slate-600

              transition-transform
              duration-300

              group-hover:rotate-12

              dark:text-slate-300
            "
          />

          {unreadCount > 0 && (

            <span
              className="
                absolute
                -right-1
                -top-1

                flex
                h-5
                min-w-[20px]

                items-center
                justify-center

                rounded-full

                bg-red-500

                px-1

                text-[10px]
                font-bold

                text-white

                shadow-lg
              "
            >
              {unreadCount}
            </span>

          )}

        </button>

        {showNotifications && (
          <NotificationDropdown />
        )}

      </div>

      {/* Theme Toggle */}

      <ThemeToggle />

      {/* ========================= */}
      {/* User Profile */}
      {/* ========================= */}

      <div
        className="relative"
        ref={userMenuRef}
      >

        <button
          type="button"
          onClick={() =>
            setShowUserMenu(
              (prev) => !prev
            )
          }
          className="
            group

            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-transparent

            bg-transparent

            px-2
            py-2

            transition-all
            duration-300

            hover:border-slate-200
            hover:bg-slate-50

            dark:hover:border-slate-700
            dark:hover:bg-slate-800
          "
        >

          {/* Avatar */}

          <div className="relative">

            {user?.avatar ? (

              <img
                src={user.avatar}
                alt={user.name}
                className="
                  h-12
                  w-12

                  rounded-full

                  border-2
                  border-blue-500

                  object-cover

                  shadow-lg
                "
              />

            ) : (

              <div
                className="
                  flex
                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-full

                  bg-gradient-to-br
                  from-blue-600
                  via-indigo-600
                  to-cyan-500

                  text-lg
                  font-bold

                  text-white

                  shadow-lg
                "
              >
                {user?.name
                  ? user.name
                      .charAt(0)
                      .toUpperCase()
                  : "G"}
              </div>

            )}

            {/* Online Indicator */}

            <span
              className="
                absolute
                bottom-0
                right-0

                h-3.5
                w-3.5

                rounded-full

                border-2
                border-white

                bg-green-500

                dark:border-slate-900
              "
            />

          </div>

          {/* User Info */}

          <div
            className="
              hidden

              text-left

              xl:block
            "
          >

            <h3
              className="
                text-sm
                font-bold

                text-slate-900

                dark:text-white
              "
            >
              {user?.name || "Guest"}
            </h3>

            <p
              className="
                max-w-[170px]

                truncate

                text-xs

                text-slate-500

                dark:text-slate-400
              "
            >
              {user?.email ||
                "guest@taskmaster.com"}
            </p>

          </div>

        </button>

        <UserMenu
          open={showUserMenu}
          onClose={() =>
            setShowUserMenu(false)
          }
        />

      </div>

    </div>

  </div>

</header>
);

}

export default Topbar;