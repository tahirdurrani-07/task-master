import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  CheckSquare,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import ThemeToggle from "../layout/ThemeToggle";

function Navbar() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "features",
        "dashboard",
        "about",
        "developer",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (element) {
          const top =
            element.offsetTop - 120;

          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  function closeMenu() {
    setMobileMenu(false);
  }

  const navLinks = [
    {
      name: "Features",
      href: "#features",
      id: "features",
    },
    {
      name: "Dashboard",
      href: "#dashboard",
      id: "dashboard",
    },
    {
      name: "About",
      href: "#about",
      id: "about",
    },
    {
      name: "Developer",
      href: "#developer",
      id: "developer",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? `
              border-b
              border-slate-200/60
              bg-white/80
              shadow-xl
              backdrop-blur-2xl

              dark:border-slate-700/60
              dark:bg-slate-900/80
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl

              bg-gradient-to-br
              from-blue-600
              via-indigo-600
              to-purple-600

              shadow-xl
              transition-all

              hover:scale-105
            "
          >
            <CheckSquare
              size={24}
              className="text-white"
            />
          </div>

          <div>

            <h1
              className="
                text-2xl
                font-extrabold
                tracking-tight
                text-slate-900

                dark:text-white
              "
            >
              Task Master
            </h1>

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-widest
                text-blue-600

                dark:text-blue-400
              "
            >
              Productivity Workspace
            </p>

          </div>

        </Link>
        {/* Desktop Navigation */}

        <nav
          className="
            hidden
            items-center
            gap-2

            lg:flex
          "
        >

          {navLinks.map((link) => (

            <a
              key={link.id}
              href={link.href}
              className={`
                relative
                rounded-xl
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  activeSection === link.id
                    ? `
                      bg-blue-600
                      text-white
                      shadow-lg
                    `
                    : `
                      text-slate-600
                      hover:bg-slate-100
                      hover:text-blue-600

                      dark:text-slate-300
                      dark:hover:bg-slate-800
                      dark:hover:text-blue-400
                    `
                }
              `}
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* Right Side */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* Theme Toggle */}

          <ThemeToggle />

          {/* Login */}

          <Link
            to="/login"
            className="
              hidden
              rounded-xl
              border
              border-slate-300
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-700
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-blue-500
              hover:text-blue-600

              dark:border-slate-700
              dark:text-slate-300
              dark:hover:border-blue-500
              dark:hover:text-blue-400

              lg:inline-flex
            "
          >
            Login
          </Link>

          {/* Get Started */}

          <Link
            to="/register"
            className="
              hidden
              items-center
              gap-2
              rounded-xl

              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600

              px-6
              py-2.5

              text-sm
              font-semibold
              text-white

              shadow-xl
              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-2xl

              lg:inline-flex
            "
          >
            Get Started

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl

              border
              border-slate-300

              bg-white

              transition-all

              hover:bg-slate-100

              dark:border-slate-700
              dark:bg-slate-900
              dark:hover:bg-slate-800

              lg:hidden
            "
          >

            {mobileMenu ? (

              <X
                size={22}
                className="
                  text-slate-700
                  dark:text-white
                "
              />

            ) : (

              <Menu
                size={22}
                className="
                  text-slate-700
                  dark:text-white
                "
              />

            )}

          </button>

        </div>

      </div>
      {/* Mobile Menu */}

      {mobileMenu && (
        <div
          className="
            border-t
            border-slate-200
            bg-white/95
            backdrop-blur-xl

            dark:border-slate-800
            dark:bg-slate-900/95

            lg:hidden
          "
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">

            {navLinks.map((link) => (

              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={`
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    activeSection === link.id
                      ? `
                        bg-blue-600
                        text-white
                      `
                      : `
                        text-slate-700
                        hover:bg-slate-100

                        dark:text-slate-300
                        dark:hover:bg-slate-800
                      `
                  }
                `}
              >
                {link.name}
              </a>

            ))}

            <div className="mt-6 flex flex-col gap-3">

              <Link
                to="/login"
                onClick={closeMenu}
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-5
                  py-3
                  text-center
                  font-semibold
                  text-slate-700
                  transition-all

                  hover:bg-slate-100

                  dark:border-slate-700
                  dark:text-slate-300
                  dark:hover:bg-slate-800
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl

                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-purple-600

                  px-5
                  py-3

                  font-semibold
                  text-white

                  shadow-lg
                  transition-all

                  hover:scale-[1.02]
                "
              >
                Get Started

                <ArrowRight size={18} />
              </Link>

            </div>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Navbar;