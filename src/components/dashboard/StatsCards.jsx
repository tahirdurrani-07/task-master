import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  TrendingUp,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";
import StatCard from "./StatCard";

function StatsCards() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  function getProductivityMessage() {
    if (productivity >= 90) return "Outstanding";
    if (productivity >= 75) return "Excellent";
    if (productivity >= 60) return "Great Progress";
    if (productivity >= 40) return "Good Progress";
    if (productivity > 0) return "Keep Going";
    return "Let's Start";
  }

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Tasks"
        value={totalTasks}
        subtitle="All tasks"
        icon={<ClipboardList size={22} />}
        trend={`${totalTasks} task${totalTasks !== 1 ? "s" : ""}`}
        trendType="neutral"
      />

      <StatCard
        title="Pending"
        value={pendingTasks}
        subtitle="Needs attention"
        icon={<Clock3 size={22} />}
        trend={`${pendingTasks} pending`}
        trendType={
          pendingTasks > 0
            ? "negative"
            : "positive"
        }
      />

      <StatCard
        title="Completed"
        value={completedTasks}
        subtitle="Finished tasks"
        icon={<CheckCircle2 size={22} />}
        trend={`${completedTasks} completed`}
        trendType="positive"
      />

      <StatCard
        title="Productivity"
        value={`${productivity}%`}
        subtitle="Completion rate"
        icon={<TrendingUp size={22} />}
        trend={getProductivityMessage()}
        trendType={
          productivity >= 60
            ? "positive"
            : productivity >= 40
            ? "neutral"
            : "negative"
        }
      />

    </section>
  );
}

export default StatsCards;