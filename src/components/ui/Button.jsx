import { Loader2 } from "lucide-react";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  className = "",
}) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    font-medium
    select-none
    transition-all
    duration-200
    focus:outline-none
    focus:ring-4
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  const variants = {
    primary: `
      bg-blue-600
      text-white
      shadow-sm

      hover:bg-blue-700
      hover:shadow-lg

      focus:ring-blue-200

      dark:bg-blue-600
      dark:hover:bg-blue-500
      dark:focus:ring-blue-900/40
    `,

    secondary: `
      bg-slate-100
      text-slate-900

      hover:bg-slate-200

      focus:ring-slate-200

      dark:bg-slate-800
      dark:text-white
      dark:hover:bg-slate-700
      dark:focus:ring-slate-700
    `,

    outline: `
      border
      border-slate-300
      bg-white
      text-slate-900

      hover:bg-slate-50

      focus:ring-slate-200

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-white
      dark:hover:bg-slate-800
      dark:focus:ring-slate-700
    `,

    ghost: `
      bg-transparent
      text-slate-700

      hover:bg-slate-100

      focus:ring-slate-200

      dark:text-slate-300
      dark:hover:bg-slate-800
      dark:focus:ring-slate-700
    `,

    danger: `
      bg-red-600
      text-white

      hover:bg-red-700

      focus:ring-red-200

      dark:bg-red-600
      dark:hover:bg-red-500
      dark:focus:ring-red-900/40
    `,
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <Loader2
            size={18}
            className="animate-spin"
          />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}

          <span className="whitespace-nowrap">
            {children}
          </span>

          {rightIcon}
        </>
      )}
    </button>
  );
}

export default Button;