import { ArrowUpDown } from "lucide-react";

import { useTasks } from "../../context/TaskContext";

const options = [
  "Newest",
  "Oldest",
  "Due Date",
  "Priority",
  "Completed",
];

function TaskSort() {
  const {
    sortBy,
    setSortBy,
  } = useTasks();

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

      <div>

        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
          Sort Tasks
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Organize tasks the way you prefer.
        </p>

      </div>

      <div className="relative">

        <ArrowUpDown
          size={18}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            h-11
            min-w-[200px]
            rounded-2xl
            border
            border-slate-300
            bg-white
            pl-11
            pr-4
            text-sm
            font-medium
            text-slate-700
            transition-all
            duration-200
            outline-none

            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-100

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:focus:border-blue-500
            dark:focus:ring-blue-900/30
          "
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default TaskSort;