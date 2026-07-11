import {
  CalendarDays,
  Flag,
  CheckCircle2,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function UpcomingTasks() {
  const { tasks = [] } = useTasks();

  const upcomingTasks = [...tasks]
    .filter(
      (task) =>
        task.status !== "Completed"
    )
    .sort(
      (a, b) =>
        new Date(a.dueDate) -
        new Date(b.dueDate)
    )
    .slice(0, 5);

  function getPriorityColor(priority) {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400";

      case "Medium":
        return "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400";

      case "Low":
        return "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400";

      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";
    }
  }

  function formatDate(date) {
    if (!date) return "No Date";

    return new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
      }
    );
  }

  return (
    <div className="space-y-4">
        {upcomingTasks.length === 0 ? (

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            border-dashed
            border-slate-300
            py-12

            dark:border-slate-700
          "
        >

          <CheckCircle2
            size={44}
            className="text-green-500"
          />

          <h3
            className="
              mt-4
              text-lg
              font-semibold
              text-slate-900

              dark:text-white
            "
          >
            You're all caught up!
          </h3>

          <p
            className="
              mt-2
              text-center
              text-sm
              text-slate-500

              dark:text-slate-400
            "
          >
            No upcoming tasks.
            Enjoy your productive day.
          </p>

        </div>

      ) : (

        upcomingTasks.map((task) => (

          <div
            key={task.id || task._id}
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-800
            "
          >

            <div className="flex items-start justify-between gap-3">

              <div className="min-w-0 flex-1">

                <h4
                  className="
                    truncate
                    text-base
                    font-semibold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {task.title}
                </h4>

                {task.description && (

                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-sm
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    {task.description}
                  </p>

                )}

              </div>

              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  ${getPriorityColor(task.priority)}
                `}
              >
                <Flag
                  size={12}
                  className="mr-1 inline"
                />

                {task.priority || "Normal"}

              </span>

            </div>

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >

                <CalendarDays size={16} />

                {formatDate(task.dueDate)}

              </div>

              <span
                className="
                  rounded-full
                  bg-blue-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-blue-700

                  dark:bg-blue-500/20
                  dark:text-blue-300
                "
              >
                {task.status}
              </span>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default UpcomingTasks;