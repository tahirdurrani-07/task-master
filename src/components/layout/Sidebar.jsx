import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Tasks",
    icon: CheckSquare,
    path: "/tasks",
  },
  {
    name: "Calendar",
    icon: CalendarDays,
    path: "/calendar",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleLogout() {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) return;

    logout();

    navigate("/login", {
      replace: true,
    });

    setSidebarOpen(false);
  }

  function handleNavigate() {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }

  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-sm

            lg:hidden
          "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50

          flex
          w-72
          flex-col

          border-r
          border-slate-200/70

          bg-white/90

          shadow-2xl

          backdrop-blur-2xl

          transition-all
          duration-300

          dark:border-slate-800
          dark:bg-slate-950/90

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:static
          lg:translate-x-0
        `}
      >

        {/* Decorative Gradient */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-40

            bg-gradient-to-br
            from-blue-600/10
            via-indigo-500/10
            to-cyan-500/10

            blur-2xl
            pointer-events-none
          "
        />

        {/* Mobile Header */}

        <div
          className="
            relative
            flex
            items-center
            justify-between

            border-b
            border-slate-200/70

            px-6
            py-6

            dark:border-slate-800

            lg:hidden
          "
        >

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
                to-indigo-700

                shadow-xl
              "
            >

              <CheckCircle2
                size={28}
                className="text-white"
              />

            </div>

            <div>

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

              <div
                className="
                  mt-1
                  inline-flex
                  items-center
                  gap-2

                  text-xs
                  font-semibold

                  text-blue-600
                "
              >

                <Sparkles size={14} />

                SaaS Workspace

              </div>

            </div>

          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              rounded-xl
              p-2

              transition

              hover:bg-slate-100

              dark:hover:bg-slate-800
            "
          >

            <X size={22} />

          </button>

        </div>

        {/* Desktop Header */}

        <div
          className="
            relative

            hidden

            border-b
            border-slate-200/70

            px-6
            py-7

            dark:border-slate-800

            lg:block
          "
        >

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

                shadow-xl
              "
            >

              <CheckCircle2
                size={28}
                className="text-white"
              />

            </div>

            <div>

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

              <p
                className="
                  mt-1
                  text-sm
                  font-medium

                  text-slate-500

                  dark:text-slate-400
                "
              >
                Productivity Workspace
              </p>

            </div>

          </div>

        </div>
        {/* =============================== */}
        {/* Navigation */}
        {/* =============================== */}

        <nav className="flex-1 overflow-y-auto px-5 py-6">

          <p
            className="
              mb-5
              px-4

              text-xs
              font-bold
              uppercase
              tracking-[0.25em]

              text-slate-400

              dark:text-slate-500
            "
          >
            Workspace
          </p>

          <div className="space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={handleNavigate}
                  className={({ isActive }) =>
                    `
                    group
                    relative

                    flex
                    items-center
                    gap-4

                    overflow-hidden

                    rounded-2xl

                    px-4
                    py-3.5

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          via-indigo-600
                          to-cyan-500

                          text-white

                          shadow-lg
                        `
                        : `
                          text-slate-600

                          hover:bg-slate-100
                          hover:text-slate-900

                          dark:text-slate-300
                          dark:hover:bg-slate-800
                          dark:hover:text-white
                        `
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Indicator */}

                      <div
                        className={`
                          absolute
                          left-0
                          top-2
                          bottom-2

                          w-1

                          rounded-r-full

                          transition-all

                          ${
                            isActive
                              ? "bg-white"
                              : "bg-transparent"
                          }
                        `}
                      />

                      {/* Icon */}

                      <div
                        className={`
                          flex
                          h-10
                          w-10

                          items-center
                          justify-center

                          rounded-xl

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-white/20"
                              : "bg-slate-100 group-hover:bg-white dark:bg-slate-800"
                          }
                        `}
                      >
                        <Icon size={20} />
                      </div>

                      {/* Name */}

                      <span
                        className="
                          flex-1

                          text-[15px]
                          font-semibold
                        "
                      >
                        {item.name}
                      </span>

                      {/* Active Dot */}

                      {isActive && (
                        <div
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-white
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}

          </div>

          {/* Quick Access */}

          <div
            className="
              mt-10

              rounded-3xl

              bg-gradient-to-br
              from-blue-600
              via-indigo-600
              to-purple-600

              p-6

              text-white

              shadow-xl
            "
          >

            <p className="text-sm opacity-80">
              Productivity
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Stay Focused 🚀
            </h3>

            <p className="mt-3 text-sm leading-6 opacity-90">
              Complete your daily goals,
              organize projects and keep
              everything under control.
            </p>

          </div>
          </nav>

        {/* =============================== */}
        {/* User Section */}
        {/* =============================== */}

        <div
          className="
            border-t
            border-slate-200/70

            p-5

            dark:border-slate-800
          "
        >

          {/* User Card */}

          <div
            className="
              mb-5

              rounded-3xl

              border
              border-slate-200

              bg-white/80

              p-4

              shadow-lg

              backdrop-blur-xl

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl

              dark:border-slate-700
              dark:bg-slate-900/80
            "
          >

            <div className="flex items-center gap-4">

              {/* Avatar */}

              <div className="relative">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-blue-600
                    via-indigo-600
                    to-cyan-500

                    text-xl
                    font-bold
                    text-white

                    shadow-lg
                  "
                >
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>

                {/* Online Indicator */}

                <span
                  className="
                    absolute
                    -bottom-1
                    -right-1

                    h-4
                    w-4

                    rounded-full

                    border-2
                    border-white

                    bg-green-500

                    dark:border-slate-900
                  "
                />

              </div>

              {/* User Info */}

              <div className="min-w-0 flex-1">

                <h3
                  className="
                    truncate

                    text-base
                    font-bold

                    text-slate-900

                    dark:text-white
                  "
                >
                  {user?.name || "Guest User"}
                </h3>

                <p
                  className="
                    truncate

                    text-sm

                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  {user?.email || "guest@taskmaster.com"}
                </p>

                <p
                  className="
                    mt-1

                    text-xs
                    font-medium

                    text-green-600

                    dark:text-green-400
                  "
                >
                  ● Online
                </p>

              </div>

            </div>

          </div>

          {/* Logout Button */}

          <button
            onClick={handleLogout}
            className="
              group

              flex
              w-full
              items-center
              justify-center
              gap-3

              rounded-2xl

              bg-gradient-to-r
              from-red-500
              to-red-600

              px-5
              py-3.5

              font-semibold
              text-white

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <LogOut
              size={19}
              className="
                transition-transform
                duration-300

                group-hover:-translate-x-1
              "
            />

            Logout

          </button>

        </div>

      </aside>

    </>
  );
}

export default Sidebar;