function Card({
  children,
  className = "",
  hover = false,
  padding = "p-6",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        ${padding}

        shadow-sm

        transition-all
        duration-300

        dark:bg-slate-900
        dark:border-slate-800

        ${
          hover
            ? `
              hover:-translate-y-1
              hover:shadow-xl

              dark:hover:border-slate-700
            `
            : ""
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;