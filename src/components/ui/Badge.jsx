function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className = "",
}) {
  const variants = {
    primary: `
      bg-blue-100
      text-blue-700
      border
      border-blue-200

      dark:bg-blue-500/15
      dark:text-blue-300
      dark:border-blue-500/30
    `,

    success: `
      bg-green-100
      text-green-700
      border
      border-green-200

      dark:bg-green-500/15
      dark:text-green-300
      dark:border-green-500/30
    `,

    warning: `
      bg-amber-100
      text-amber-700
      border
      border-amber-200

      dark:bg-amber-500/15
      dark:text-amber-300
      dark:border-amber-500/30
    `,

    danger: `
      bg-red-100
      text-red-700
      border
      border-red-200

      dark:bg-red-500/15
      dark:text-red-300
      dark:border-red-500/30
    `,

    secondary: `
      bg-slate-100
      text-slate-700
      border
      border-slate-200

      dark:bg-slate-800
      dark:text-slate-300
      dark:border-slate-700
    `,

    purple: `
      bg-violet-100
      text-violet-700
      border
      border-violet-200

      dark:bg-violet-500/15
      dark:text-violet-300
      dark:border-violet-500/30
    `,
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-sm",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        whitespace-nowrap

        font-medium

        transition-all
        duration-200

        ${
          rounded
            ? "rounded-full"
            : "rounded-xl"
        }

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;