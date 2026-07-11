import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10

        bg-gradient-to-br
        from-slate-100
        via-white
        to-blue-50

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      <div className="w-full max-w-lg">

        {/* Logo */}

        <div className="mb-10 flex flex-col items-center">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl

              bg-blue-600

              shadow-lg
            "
          >
            <CheckCircle2
              size={40}
              className="text-white"
            />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Task Master
          </h1>

          <p className="mt-3 text-center text-slate-500 dark:text-slate-400">
            Organize your work smarter.
            Stay productive every day.
          </p>

        </div>

        {/* Card */}

        <div
          className="
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-10

            shadow-xl

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>

        </div>

        {/* Footer */}

        {footerText && (
          <p className="mt-8 text-center text-slate-500 dark:text-slate-400">

            {footerText}{" "}

            <Link
              to={footerLink}
              className="
                font-semibold
                text-blue-600

                hover:underline

                dark:text-blue-400
              "
            >
              {footerLinkText}
            </Link>

          </p>
        )}

      </div>
    </div>
  );
}

export default AuthLayout;