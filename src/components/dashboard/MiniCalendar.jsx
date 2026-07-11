import Card from "../ui/Card";
import { CalendarDays } from "lucide-react";

function MiniCalendar() {
  const today = new Date();

  const month = today.toLocaleString("default", {
    month: "long",
  });

  const day = today.getDate();

  const year = today.getFullYear();

  const weekday = today.toLocaleString("default", {
    weekday: "long",
  });

  return (
    <Card
      title="Today's Calendar"
      subtitle={weekday}
      className="h-full"
    >
      <div className="flex flex-col items-center justify-center py-8">

        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">

          <CalendarDays
            size={30}
            className="text-blue-600"
          />

        </div>

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          {day}
        </h2>

        <p className="mt-2 text-lg text-slate-500">
          {month} {year}
        </p>

      </div>
    </Card>
  );
}

export default MiniCalendar;