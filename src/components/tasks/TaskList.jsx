import { useMemo } from "react";
import { PlusCircle } from "lucide-react";

import { useTasks } from "../../context/TaskContext";

import Card from "../ui/Card";
import TaskCard from "./TaskCard";
import TaskFilters from "./TaskFilters";
import TaskProgress from "./TaskProgress";
import TaskSort from "./TaskSort";

function TaskList() {
  const {
    tasks,
    search,
    filter,
    sortBy,
  } = useTasks();

  const keyword = (search || "").toLowerCase();

  const completed = tasks.filter(
    (task) =>
      task.completed ||
      task.status === "Completed"
  ).length;

  const pending = tasks.length - completed;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const filteredTasks = useMemo(() => {
    let result = tasks.filter((task) => {

      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(keyword) ||
        (task.description || "")
          .toLowerCase()
          .includes(keyword);

      let matchesFilter = true;

      switch (filter) {

        case "Pending":
          matchesFilter =
            !task.completed &&
            task.status !== "Completed";
          break;

        case "Completed":
          matchesFilter =
            task.completed ||
            task.status === "Completed";
          break;

        case "High":
        case "Medium":
        case "Low":
          matchesFilter =
            task.priority === filter;
          break;

        default:
          matchesFilter = true;

      }

      return (
        matchesSearch &&
        matchesFilter
      );

    });

    switch (sortBy) {

      case "Newest":

        result.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );

        break;

      case "Oldest":

        result.sort(
          (a, b) =>
            new Date(a.createdAt) -
            new Date(b.createdAt)
        );

        break;

      case "Due Date":

        result.sort(
          (a, b) =>
            new Date(a.dueDate || 0) -
            new Date(b.dueDate || 0)
        );

        break;

      case "Priority": {

        const priority = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        result.sort(
          (a, b) =>
            priority[b.priority] -
            priority[a.priority]
        );

        break;

      }

      case "Completed":

        result.sort(
          (a, b) =>
            Number(
              b.completed ||
              b.status === "Completed"
            ) -
            Number(
              a.completed ||
              a.status === "Completed"
            )
        );

        break;

      default:
        break;

    }

    return result;

  }, [
    tasks,
    keyword,
    filter,
    sortBy,
  ]);

  return (
    <div className="space-y-6">

      {/* Statistics */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <Card hover>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Tasks
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {tasks.length}
          </h2>

        </Card>

        <Card hover>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {completed}
          </h2>

        </Card>

        <Card hover>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pending
          </p>

          <h2 className="mt-2 text-3xl font-bold text-orange-500">
            {pending}
          </h2>

        </Card>

        <Card hover>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            High Priority
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-500">
            {highPriority}
          </h2>

        </Card>

      </div>

      {/* Progress */}

      <TaskProgress
        total={tasks.length}
        completed={completed}
      />

      {/* Main Card */}

      <Card>

        <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 dark:border-slate-700 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              My Tasks
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {filteredTasks.length} task
              {filteredTasks.length !== 1
                ? "s"
                : ""} found
            </p>

          </div>

          <TaskSort />

        </div>

        <div className="mt-6">
          <TaskFilters />
        </div>

        {filteredTasks.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-24">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">

              <PlusCircle size={46} />

            </div>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
              No Tasks Found
            </h3>

            <p className="mt-3 max-w-md text-center leading-7 text-slate-500 dark:text-slate-400">
              Create your first task or change the current search and filters.
            </p>

          </div>

        ) : (

          <div className="mt-8 space-y-5">

            {filteredTasks.map((task) => (

              <TaskCard
                key={task._id}
                task={task}
              />

            ))}

          </div>

        )}

      </Card>

    </div>
  );
}

export default TaskList;