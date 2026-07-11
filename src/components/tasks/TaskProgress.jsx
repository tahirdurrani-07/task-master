import { CheckCircle2 } from "lucide-react";

import Card from "../ui/Card";

function TaskProgress({
  total,
  completed,
}) {
  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Today's Progress
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {completed} of {total} task
            {total !== 1 ? "s" : ""} completed
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">

          <CheckCircle2 size={24} />

        </div>

      </div>

      {/* Progress Bar */}

      <div className="mt-6">

        <div className="flex justify-between text-sm font-medium">

          <span className="text-slate-600 dark:text-slate-300">
            Completion
          </span>

          <span className="text-blue-600 dark:text-blue-400">
            {percentage}%
          </span>

        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

    </Card>
  );
}

export default TaskProgress;