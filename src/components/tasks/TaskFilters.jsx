import { useTasks } from "../../context/TaskContext";

const filters = [
  "All",
  "Pending",
  "Completed",
  "High",
  "Medium",
  "Low",
];

function TaskFilters() {
  const { filter, setFilter } = useTasks();

  return (
    <div className="mb-6 overflow-x-auto">
      <div
        className="
          flex
          min-w-max
          items-center
          gap-2
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-1
          transition-all
          duration-300

          dark:border-slate-700
          dark:bg-slate-800
        "
      >
        {filters.map((item) => {
          const active = filter === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`
                rounded-xl
                px-4
                py-2
                text-sm
                font-medium
                whitespace-nowrap
                transition-all
                duration-200

                ${
                  active
                    ? `
                        bg-blue-600
                        text-white
                        shadow-md
                      `
                    : `
                        text-slate-600
                        hover:bg-white
                        hover:text-slate-900

                        dark:text-slate-300
                        dark:hover:bg-slate-700
                        dark:hover:text-white
                      `
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TaskFilters;