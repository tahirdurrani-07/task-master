export function formatDueDate(dateString) {
  if (!dateString) return "No Due Date";

  const today = new Date();
  const due = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const diff = Math.round(
    (due - today) / (1000 * 60 * 60 * 24)
  );

  if (diff === 0) return "🟢 Today";

  if (diff === 1) return "🟡 Tomorrow";

  if (diff === -1) return "🔴 Yesterday";

  if (diff > 1 && diff <= 7)
    return `⏳ ${diff} days left`;

  if (diff < -1)
    return `⚠️ Overdue by ${Math.abs(diff)} day${
      Math.abs(diff) > 1 ? "s" : ""
    }`;

  return due.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}