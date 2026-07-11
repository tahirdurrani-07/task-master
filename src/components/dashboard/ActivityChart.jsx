import {
  Bell,
  CheckCircle2,
  Clock3,
  UploadCloud,
} from "lucide-react";

import Card from "../ui/Card";

const activities = [
  {
    id: 1,
    icon: CheckCircle2,
    title: "Task Completed",
    description: "React Dashboard UI finished successfully.",
    time: "5 min ago",
    color:
      "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400",
  },
  {
    id: 2,
    icon: Clock3,
    title: "Meeting Scheduled",
    description: "Frontend Team discussion at 2:00 PM.",
    time: "30 min ago",
    color:
      "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  },
  {
    id: 3,
    icon: Bell,
    title: "Reminder Created",
    description: "Assignment submission reminder added.",
    time: "1 hour ago",
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  },
  {
    id: 4,
    icon: UploadCloud,
    title: "Project Uploaded",
    description: "Task Master v1.0 uploaded successfully.",
    time: "Today",
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400",
  },
];

function ActivityChart() {
  return (
    <Card
      hover
      className="overflow-hidden"
    >
      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Latest updates from your productivity workspace.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="group relative flex gap-5 pb-8 last:pb-0"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    shadow-sm
                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:shadow-lg

                    ${activity.color}
                  `}
                >
                  <Icon size={20} />
                </div>

                {index !== activities.length - 1 && (
                  <div className="mt-3 h-full w-px bg-slate-200 dark:bg-slate-700" />
                )}

              </div>

              {/* Content */}

              <div
                className="
                  flex-1
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:bg-white
                  hover:shadow-lg

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:border-blue-500
                  dark:hover:bg-slate-800
                "
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {activity.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {activity.description}
                    </p>

                  </div>

                  <span
                    className="
                      whitespace-nowrap
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-slate-500

                      dark:bg-slate-800
                      dark:text-slate-400
                    "
                  >
                    {activity.time}
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </Card>
  );
}

export default ActivityChart;