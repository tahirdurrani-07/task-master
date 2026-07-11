import CalendarWidget from "../components/dashboard/CalendarWidget";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

import { CalendarDays, Clock3 } from "lucide-react";

import { useTasks } from "../context/TaskContext";

function Calendar() {
  const { tasks } = useTasks();

  const today = new Date().toISOString().split("T")[0];

  const todayTasks = tasks.filter(
    (task) => task.dueDate === today
  );

  const upcomingTasks = [...tasks]
    .filter(
      (task) =>
        task.dueDate &&
        task.dueDate > today &&
        !task.completed
    )
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 5);

  return (
    <div className="space-y-8">

      {/* Page Header */}

      <PageHeader
        title="Calendar"
        subtitle="Plan your schedule and keep track of important dates."
      />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Calendar */}

        <div className="xl:col-span-8">

          <CalendarWidget />

        </div>

        {/* Right Panel */}

        <div className="xl:col-span-4 space-y-6">

          {/* Today's Tasks */}

          <Card hover>

            <div className="flex items-center gap-3 mb-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-600/20">

                <CalendarDays
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />

              </div>

              <div>

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">

                  Today's Tasks

                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400">

                  {todayTasks.length} task(s)

                </p>

              </div>

            </div>

            {todayTasks.length === 0 ? (

              <div className="py-10 text-center">

                <CalendarDays
                  size={42}
                  className="mx-auto text-slate-300 dark:text-slate-600"
                />

                <p className="mt-4 text-slate-500 dark:text-slate-400">

                  No tasks due today.

                </p>

              </div>

            ) : (

              <div className="space-y-4">

                {todayTasks.map((task) => (

                  <div
                    key={task.id}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      transition-all
                      hover:shadow-md

                      dark:border-slate-700
                      dark:bg-slate-800
                    "
                  >

                    <h3 className="font-semibold text-slate-900 dark:text-white">

                      {task.title}

                    </h3>

                    <div className="mt-3">

                      <Badge
                        variant={
                          task.priority === "High"
                            ? "danger"
                            : task.priority === "Medium"
                            ? "warning"
                            : "success"
                        }
                      >
                        {task.priority}
                      </Badge>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </Card>

          {/* Upcoming */}

          <Card hover>

            <div className="flex items-center gap-3 mb-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-500/20">

                <Clock3
                  size={20}
                  className="text-orange-600 dark:text-orange-400"
                />

              </div>

              <div>

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">

                  Upcoming

                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400">

                  Deadlines

                </p>

              </div>

            </div>

            {upcomingTasks.length === 0 ? (

              <div className="py-10 text-center">

                <Clock3
                  size={42}
                  className="mx-auto text-slate-300 dark:text-slate-600"
                />

                <p className="mt-4 text-slate-500 dark:text-slate-400">

                  No upcoming deadlines.

                </p>

              </div>

            ) : (

              <div className="space-y-4">

                {upcomingTasks.map((task) => (

                  <div
                    key={task.id}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      transition-all
                      hover:shadow-md

                      dark:border-slate-700
                      dark:bg-slate-800
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="font-semibold text-slate-900 dark:text-white">

                          {task.title}

                        </h3>

                        <div className="mt-3">

                          <Badge
                            variant={
                              task.priority === "High"
                                ? "danger"
                                : task.priority === "Medium"
                                ? "warning"
                                : "success"
                            }
                          >
                            {task.priority}
                          </Badge>

                        </div>

                      </div>

                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">

                        {task.dueDate}

                      </span>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </Card>

        </div>

      </div>

    </div>
  );
}

export default Calendar;