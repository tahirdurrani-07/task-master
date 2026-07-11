import Card from "../ui/Card";
import { CheckCircle2, Circle, Clock3 } from "lucide-react";

function RecentActivity({ activities = [] }) {
  return (
    <Card
      title="Recent Activity"
      subtitle="Latest updates from your workspace"
    >
      {activities.length === 0 ? (
        <div className="py-10 text-center">

          <Clock3
            size={42}
            className="mx-auto text-slate-300"
          />

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            No recent activity
          </h3>

          <p className="mt-2 text-slate-500">
            Your latest task updates will appear here.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4"
            >

              <div className="mt-1">

                {activity.completed ? (
                  <CheckCircle2
                    size={20}
                    className="text-green-600"
                  />
                ) : (
                  <Circle
                    size={20}
                    className="text-blue-600"
                  />
                )}

              </div>

              <div className="flex-1">

                <p className="font-medium text-slate-900">
                  {activity.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.description}
                </p>

              </div>

              <span className="text-sm text-slate-400 whitespace-nowrap">
                {activity.time}
              </span>

            </div>
          ))}

        </div>
      )}
    </Card>
  );
}

export default RecentActivity;