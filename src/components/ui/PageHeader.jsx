function PageHeader({
  title,
  subtitle,
  action,
  className = "",
}) {
  return (
    <header
      className={`
        mb-8
        flex
        flex-col
        gap-6
        md:flex-row
        md:items-center
        md:justify-between

        ${className}
      `}
    >
      {/* Left */}

      <div className="min-w-0">

        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            transition-colors
            duration-300

            dark:text-white
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              mt-3
              max-w-3xl
              text-base
              leading-7
              text-slate-500
              transition-colors
              duration-300

              dark:text-slate-400
            "
          >
            {subtitle}
          </p>
        )}

      </div>

      {/* Right */}

      {action && (
        <div
          className="
            flex
            items-center
            gap-3
            md:justify-end
          "
        >
          {action}
        </div>
      )}

    </header>
  );
}

export default PageHeader;