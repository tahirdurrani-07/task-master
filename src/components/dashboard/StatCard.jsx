import Card from "../ui/Card";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendType = "neutral",
}) {
  const trendColors = {
    positive:
      "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",

    negative:
      "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",

    neutral:
      "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
  };

  return (
    <Card
      hover
      className="
        group
        relative
        overflow-hidden
        min-h-[180px]
      "
    >
      {/* Decorative Gradient */}

      <div
        className="
          absolute
          right-0
          top-0
          h-24
          w-24
          rounded-full
          bg-blue-500/5
          blur-3xl
          transition-all
          duration-500
          group-hover:scale-150
        "
      />

      <div className="relative">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex-1 min-w-0">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-500

                dark:text-slate-400
              "
            >
              {title}
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-slate-900

                dark:text-white
              "
            >
              {value}
            </h2>

          </div>

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl

              bg-gradient-to-br
              from-blue-500
              to-blue-600

              text-white
              shadow-lg

              transition-transform
              duration-300

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            {icon}
          </div>

        </div>

        {/* Footer */}

        <div className="mt-8">

          <p
            className="
              text-sm
              leading-6
              text-slate-500

              dark:text-slate-400
            "
          >
            {subtitle}
          </p>

          {trend && (

            <div className="mt-4">

              <span
                className={`
                  inline-flex
                  items-center
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-semibold

                  ${trendColors[trendType]}
                `}
              >
                {trend}
              </span>

            </div>

          )}

        </div>

      </div>

    </Card>
  );
}

export default StatCard;