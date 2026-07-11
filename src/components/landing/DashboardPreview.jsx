import {
  CheckCircle2,
  CalendarDays,
  Bell,
  BarChart3,
  Clock3,
  UserCircle,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience Task Master Before You Sign Up
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A clean, modern dashboard designed to help you stay focused,
            organized and productive every day.
          </p>

        </div>

        <div
          className="
            mt-20
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-2xl

            dark:border-slate-800
            dark:bg-slate-950
          "
        >

          {/* Top */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Welcome Back 👋
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Let's finish today's work.
              </p>

            </div>

            <div className="flex items-center gap-4">

              <Bell
                className="text-slate-500"
                size={22}
              />

              <UserCircle
                size={42}
                className="text-blue-600"
              />

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-blue-50 p-6 dark:bg-slate-900">

              <BarChart3
                className="text-blue-600"
                size={28}
              />

              <h4 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                24
              </h4>

              <p className="text-slate-500">
                Total Tasks
              </p>

            </div>

            <div className="rounded-2xl bg-green-50 p-6 dark:bg-slate-900">

              <CheckCircle2
                className="text-green-600"
                size={28}
              />

              <h4 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                18
              </h4>

              <p className="text-slate-500">
                Completed
              </p>

            </div>

            <div className="rounded-2xl bg-orange-50 p-6 dark:bg-slate-900">

              <Clock3
                className="text-orange-600"
                size={28}
              />

              <h4 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                6
              </h4>

              <p className="text-slate-500">
                Pending
              </p>

            </div>

            <div className="rounded-2xl bg-purple-50 p-6 dark:bg-slate-900">

              <CalendarDays
                className="text-purple-600"
                size={28}
              />

              <h4 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                92%
              </h4>

              <p className="text-slate-500">
                Productivity
              </p>

            </div>

          </div>

          {/* Tasks */}

          <div className="mt-12">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Today's Tasks
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "Complete React Assignment",
                "Study Database Systems",
                "Prepare AI Presentation",
                "Workout Session",
              ].map((task) => (

                <div
                  key={task}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-5

                    dark:border-slate-800
                    dark:bg-slate-900
                  "
                >

                  <div className="flex items-center gap-4">

                    <CheckCircle2
                      className="text-green-600"
                      size={22}
                    />

                    <span className="font-medium text-slate-800 dark:text-white">
                      {task}
                    </span>

                  </div>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                    High
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;