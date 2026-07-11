import {
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: CheckCircle2,
    value: "25,000+",
    title: "Tasks Completed",
    description:
      "Successfully managed tasks by our users.",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-500/10",
  },
  {
    icon: Users,
    value: "5,000+",
    title: "Active Users",
    description:
      "Students, developers and professionals.",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    value: "99%",
    title: "Success Rate",
    description:
      "Helping users stay productive every day.",
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-500/10",
  },
  {
    icon: Award,
    value: "24/7",
    title: "Available",
    description:
      "Access your tasks anytime and anywhere.",
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-500/10",
  },
];

function Stats() {
  return (
    <section
      className="
        bg-white
        py-24

        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span
            className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700

              dark:bg-blue-500/10
              dark:text-blue-400
            "
          >
            Our Impact
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              text-slate-900

              dark:text-white
            "
          >
            Trusted By Productive People
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600

              dark:text-slate-400
            "
          >
            Task Master is designed to help people
            stay organized, achieve their goals,
            and improve daily productivity.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-blue-300

                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:hover:border-blue-500
                "
              >

                <div
                  className={`
                    ${item.bg}
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                  `}
                >
                  <Icon
                    size={32}
                    className={item.color}
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-5xl
                    font-extrabold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {item.value}
                </h3>

                <h4
                  className="
                    mt-4
                    text-xl
                    font-bold
                    text-slate-800

                    dark:text-white
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-3
                    leading-7
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Stats;