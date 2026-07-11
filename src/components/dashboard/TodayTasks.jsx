import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { Circle, CheckCircle2 } from "lucide-react";

function TodayTasks({ tasks = [] }) {
  return (
    <Card
      title="Today's Tasks"
      subtitle={`${tasks.length} task${tasks.length !== 1 ? "s" : ""} for today`}
      className="h-full"
    >
      {tasks.length === 0 ? (
        <div className="py-12 text-center">

          <CheckCircle2
            size={48}
            className="mx-auto text-slate-300"
          />

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            You're all caught up!
          </h3>

          <p className="mt-2 text-slate-500">
            No tasks scheduled for today.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">

                {task.completed ? (
                  <CheckCircle2
                    size={20}
                    className="text-green-600"
                  />
                ) : (
                  <Circle
                    size={20}
                    className="text-slate-400"
                  />
                )}

                <div>

                  <h4 className="font-medium text-slate-900">
                    {task.title}
                  </h4>

                  {task.time && (
                    <p className="text-sm text-slate-500">
                      {task.time}
                    </p>
                  )}

                </div>

              </div>

              <Badge
                variant={
                  task.priority === "High"
                    ? "danger"
                    : task.priority === "Medium"
                    ? "warning"
                    : "success"
                }
              >
                {task.priority}
              </Badge>

            </div>
          ))}

        </div>
      )}
    </Card>
  );
}

export default TodayTasks;