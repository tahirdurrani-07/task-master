import {
  CheckSquare,
  CalendarDays,
  BarChart3,
  UserCircle,
  ShieldCheck,
  Moon,
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description:
      "Create, edit, organize and complete tasks effortlessly with an intuitive interface.",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  {
    icon: CalendarDays,
    title: "Calendar Planning",
    description:
      "Schedule your work efficiently and never miss important deadlines.",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track productivity, monitor progress and visualize your performance.",
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-500/10",
  },
  {
    icon: UserCircle,
    title: "Personal Profile",
    description:
      "Manage your personal information and customize your experience.",
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Private accounts, protected routes and secure login for every user.",
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-500/10",
  },
  {
    icon: Moon,
    title: "Dark & Light Mode",
    description:
      "Switch themes instantly for a comfortable experience day or night.",
    color: "text-indigo-600",
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 dark:text-white">
            Everything You Need To Stay Productive
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Task Master combines modern design with powerful tools
            to help students, developers and professionals manage
            projects more efficiently.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
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
                    ${feature.bg}
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
                    className={feature.color}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;