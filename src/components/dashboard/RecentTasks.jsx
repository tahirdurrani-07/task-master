import {
  CheckCircle2,
  Trash2,
  Pencil,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

import Badge from "../ui/Badge";
import Card from "../ui/Card";
import TaskFilters from "../tasks/TaskFilters";

function RecentTasks({ onEditTask }) {
  const {
    tasks,
    deleteTask,
    toggleTask,
    search,
    filter,
    setEditingTask,
  } = useTasks();

  const keyword = (search || "").toLowerCase();

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(keyword) ||
      (task.description || "")
        .toLowerCase()
        .includes(keyword);

    let matchesFilter = true;

    switch (filter) {
      case "Pending":
        matchesFilter = !task.completed;
        break;

      case "Completed":
        matchesFilter = task.completed;
        break;

      case "High":
      case "Medium":
      case "Low":
        matchesFilter = task.priority === filter;
        break;

      default:
        matchesFilter = true;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <Card className="overflow-hidden">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Today's Tasks
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {filteredTasks.length} task
            {filteredTasks.length !== 1 ? "s" : ""} available
          </p>

        </div>

        <Badge variant="primary" size="lg">
          {filteredTasks.length}
        </Badge>

      </div>

      <TaskFilters />

      {filteredTasks.length === 0 ? (

        <div className="flex flex-col items-center justify-center py-20">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/15">

            <CheckCircle2
              size={38}
              className="text-blue-600 dark:text-blue-400"
            />

          </div>

          <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
            Everything is completed 🎉
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Enjoy your day! No pending tasks.
          </p>

        </div>

      ) : (

        <div className="mt-7 space-y-5">

          {filteredTasks.map((task) => (

            <div
              key={task.id}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-6
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-300
                hover:bg-white
                hover:shadow-lg

                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:border-blue-500
                dark:hover:bg-slate-800
              "
            >

              <div className="flex items-start justify-between gap-6">

                {/* Left */}

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <h3
                      className={`text-xl font-semibold ${
                        task.completed
                          ? "line-through text-slate-400"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {task.title}
                    </h3>

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

                  <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
                    {task.description || "No description provided."}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-5">

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

                      <CalendarDays size={16} />

                      <span>
                        {task.dueDate || "No Due Date"}
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Clock3
                        size={16}
                        className={
                          task.completed
                            ? "text-green-500"
                            : "text-orange-500"
                        }
                      />

                      <span
                        className={`text-sm font-semibold ${
                          task.completed
                            ? "text-green-600 dark:text-green-400"
                            : "text-orange-500 dark:text-orange-400"
                        }`}
                      >
                        {task.completed
                          ? "Completed"
                          : "Pending"}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Actions */}
                <div className="flex gap-3">

                  {/* Edit */}

                  <button
                    onClick={() => {
                      setEditingTask(task);

                      if (onEditTask) {
                        onEditTask();
                      }
                    }}
                    title="Edit"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl

                      bg-blue-100
                      text-blue-600

                      transition-all

                      hover:scale-105
                      hover:bg-blue-600
                      hover:text-white

                      dark:bg-blue-500/15
                      dark:text-blue-400
                      dark:hover:bg-blue-600
                      dark:hover:text-white
                    "
                  >
                    <Pencil size={18} />
                  </button>

                  {/* Complete */}

                  <button
                    onClick={() => toggleTask(task.id)}
                    title="Complete"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl

                      bg-green-100
                      text-green-600

                      transition-all

                      hover:scale-105
                      hover:bg-green-600
                      hover:text-white

                      dark:bg-green-500/15
                      dark:text-green-400
                      dark:hover:bg-green-600
                      dark:hover:text-white
                    "
                  >
                    <CheckCircle2 size={18} />
                  </button>

                  {/* Delete */}

                  <button
                    onClick={() => deleteTask(task.id)}
                    title="Delete"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl

                      bg-red-100
                      text-red-600

                      transition-all

                      hover:scale-105
                      hover:bg-red-600
                      hover:text-white

                      dark:bg-red-500/15
                      dark:text-red-400
                      dark:hover:bg-red-600
                      dark:hover:text-white
                    "
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </Card>
  );
}

export default RecentTasks;