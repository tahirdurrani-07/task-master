import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarWidget.css";

import { CalendarDays } from "lucide-react";

import Card from "../ui/Card";
import { useTasks } from "../../context/TaskContext";

function CalendarWidget() {
  const { tasks } = useTasks();

  const [selectedDate, setSelectedDate] = useState(new Date());

  function formatDate(date) {
    return date.toISOString().split("T")[0];
  }

  const selectedTasks = tasks.filter(
    (task) => task.dueDate === formatDate(selectedDate)
  );

  function hasTask(date) {
    return tasks.some(
      (task) => task.dueDate === formatDate(date)
    );
  }

  return (
    <Card padding="p-6" hover>

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Calendar
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Your schedule
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">

          <CalendarDays size={20} />

        </div>

      </div>

      {/* Calendar */}

      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        tileContent={({ date, view }) =>
          view === "month" && hasTask(date) ? (
            <div className="flex justify-center mt-1">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </div>
          ) : null
        }
      />

      {/* Tasks */}

      <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-5">

        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Tasks
        </h3>

        {selectedTasks.length === 0 ? (

          <p className="text-sm text-slate-500 dark:text-slate-400">
            No tasks scheduled.
          </p>

        ) : (

          <div className="space-y-3">

            {selectedTasks.slice(0, 3).map((task) => (

              <div
                key={task.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
              >

                <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {task.title}
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {task.priority} Priority
                </p>

              </div>

            ))}

            {selectedTasks.length > 3 && (

              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                +{selectedTasks.length - 3} more tasks
              </p>

            )}

          </div>

        )}

      </div>

    </Card>
  );
}

export default CalendarWidget;