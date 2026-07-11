import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useTasks } from "../../context/TaskContext";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
];

function AnalyticsChart() {
  const { tasks } = useTasks();

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const data = [
    {
      name: "Pending",
      value: pending,
    },
    {
      name: "In Progress",
      value: progress,
    },
    {
      name: "Completed",
      value: completed,
    },
  ];

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm

        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Task Analytics
      </h2>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Distribution of your tasks
      </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={95}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;