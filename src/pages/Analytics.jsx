import {
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  Clock3,
  ListTodo,
  TrendingUp,
} from "lucide-react";

import Card from "../components/ui/Card";
import { useTasks } from "../context/TaskContext";

function Analytics() {
  const { tasks } = useTasks();

  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const pending = total - completed;

  const productivity =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const high = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const medium = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const low = tasks.filter(
    (task) => task.priority === "Low"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: total,
      icon: <ListTodo size={24} />,
      color:
        "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 size={24} />,
      color:
        "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={24} />,
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
    },
    {
      title: "High Priority",
      value: high,
      icon: <AlertTriangle size={24} />,
      color:
        "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",
    },
    {
      title: "Medium Priority",
      value: medium,
      icon: <CircleDashed size={24} />,
      color:
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/15 dark:text-yellow-400",
    },
    {
      title: "Low Priority",
      value: low,
      icon: <TrendingUp size={24} />,
      color:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <Card>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Analytics
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Monitor your productivity, completion rate and task distribution.
        </p>

      </Card>

      {/* Productivity */}

      <Card>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Productivity Score
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Based on completed tasks.
            </p>

          </div>

          <div className="text-right">

            <h3 className="text-5xl font-bold text-blue-600">
              {productivity}%
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Overall Progress
            </p>

          </div>

        </div>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

          <div
            className="h-full rounded-full bg-blue-600"
            style={{
              width: `${productivity}%`,
            }}
          />

        </div>

      </Card>

      {/* Statistics */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {stats.map((item) => (

          <Card
            hover
            key={item.title}
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h2>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                {item.icon}
              </div>

            </div>

          </Card>

        ))}

      </section>

      {/* Summary */}

      <Card>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Productivity Summary
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Completion Rate
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {productivity}%
            </h3>

          </div>

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Remaining Tasks
            </p>

            <h3 className="mt-2 text-3xl font-bold text-orange-500">
              {pending}
            </h3>

          </div>

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Managed
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-600">
              {total}
            </h3>

          </div>

        </div>

      </Card>

    </div>
  );
}

export default Analytics;