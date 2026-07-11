import {
  Plus,
  CalendarDays,
  Sparkles,
  CheckCircle2,
  Clock3,
  Target,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import Button from "../ui/Button";
import Card from "../ui/Card";

import { useTasks } from "../../context/TaskContext";

const quotes = [
  "Small progress every day leads to big success.",
  "Focus on progress, not perfection.",
  "Discipline beats motivation.",
  "Stay consistent and results will follow.",
  "One completed task is better than ten planned tasks.",
  "Your future is created by what you do today.",
];

function WelcomeBanner({
  userName = "User",
  onAddTask,
}) {
  const { tasks = [] } = useTasks();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  const quote =
    quotes[
      new Date().getDate() % quotes.length
    ];

  return (
    <Card
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-slate-200/70
        bg-white/90
        p-8
        shadow-xl
        backdrop-blur-xl

        dark:border-slate-700/60
        dark:bg-slate-900/90
      "
    >
        {/* Background Effects */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            -left-20
            -top-20
            h-80
            w-80
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-80
            w-80
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/3
            h-72
            w-72
            rounded-full
            bg-violet-500/10
            blur-3xl
          "
        />

      </div>

      <div
        className="
          relative
          flex
          flex-col
          gap-10

          xl:flex-row
          xl:justify-between
          xl:items-start
        "
      >

        {/* LEFT SECTION */}

        <div className="flex-1">

          {/* Date Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-4
              py-2

              dark:border-blue-500/20
              dark:bg-blue-500/10
            "
          >

            <CalendarDays
              size={16}
              className="text-blue-600 dark:text-blue-400"
            />

            <span
              className="
                text-sm
                font-semibold
                text-blue-700

                dark:text-blue-300
              "
            >
              {today}
            </span>

          </div>

          {/* Greeting */}

          <h1
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              tracking-tight

              text-slate-900

              sm:text-6xl

              dark:text-white
            "
          >
            {greeting},

            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              {userName}
            </span>

            <span className="ml-2">
              👋
            </span>

          </h1>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600

              dark:text-slate-400
            "
          >
            Welcome back to your productivity workspace.
            Organize your schedule, complete important
            tasks, collaborate efficiently and stay focused
            throughout the day using Task Master.
          </p>

          {/* Motivation Card */}

          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white/70
              px-5
              py-4
              shadow-sm
              backdrop-blur-xl

              dark:border-slate-700
              dark:bg-slate-800/70
            "
          >

            <Sparkles
              size={20}
              className="text-amber-500"
            />

            <span
              className="
                text-sm
                font-medium
                text-slate-700

                dark:text-slate-300
              "
            >
              {quote}
            </span>

          </div>
          {/* ========================= */}
          {/* Statistics */}
          {/* ========================= */}

          <div
            className="
              mt-10
              grid
              gap-5

              sm:grid-cols-2
              xl:grid-cols-4
            "
          >

            {/* Total Tasks */}

            <div
              className="
                group
                rounded-3xl
                border
                border-slate-200/70
                bg-white/70
                p-5
                shadow-sm
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl

                dark:border-slate-700
                dark:bg-slate-800/70
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100

                    dark:bg-blue-500/20
                  "
                >
                  <Target
                    size={26}
                    className="text-blue-600"
                  />
                </div>

                <ArrowUpRight
                  size={20}
                  className="
                    text-blue-600
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  text-slate-900

                  dark:text-white
                "
              >
                {totalTasks}
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Total Tasks
              </p>

            </div>

            {/* Completed */}

            <div
              className="
                group
                rounded-3xl
                border
                border-slate-200/70
                bg-white/70
                p-5
                shadow-sm
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl

                dark:border-slate-700
                dark:bg-slate-800/70
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100

                    dark:bg-green-500/20
                  "
                >
                  <CheckCircle2
                    size={26}
                    className="text-green-600"
                  />
                </div>

                <TrendingUp
                  size={20}
                  className="text-green-500"
                />

              </div>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  text-green-600
                "
              >
                {completedTasks}
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Completed
              </p>

            </div>

            {/* Pending */}

            <div
              className="
                group
                rounded-3xl
                border
                border-slate-200/70
                bg-white/70
                p-5
                shadow-sm
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl

                dark:border-slate-700
                dark:bg-slate-800/70
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-amber-100

                    dark:bg-yellow-500/20
                  "
                >
                  <Clock3
                    size={26}
                    className="text-amber-600"
                  />
                </div>

                <TrendingUp
                  size={20}
                  className="text-amber-500"
                />

              </div>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  text-amber-600
                "
              >
                {pendingTasks}
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Pending
              </p>

            </div>

            {/* Productivity */}

            <div
              className="
                rounded-3xl

                bg-gradient-to-br
                from-blue-600
                via-indigo-600
                to-violet-600

                p-5

                text-white

                shadow-xl
              "
            >

              <p className="text-sm text-white/80">
                Productivity
              </p>

              <h2
                className="
                  mt-4
                  text-5xl
                  font-black
                "
              >
                {productivity}%
              </h2>

              <div
                className="
                  mt-6
                  h-3
                  overflow-hidden
                  rounded-full
                  bg-white/20
                "
              >

                <div
                  className="
                    h-full
                    rounded-full
                    bg-white
                    transition-all
                    duration-700
                  "
                  style={{
                    width: `${productivity}%`,
                  }}
                />

              </div>

              <p className="mt-3 text-sm text-white/80">
                Keep up the great work!
              </p>

            </div>

          </div>
          {/* End LEFT SECTION */}
        </div>

        {/* ========================= */}
        {/* RIGHT SECTION */}
        {/* ========================= */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-6

            xl:max-w-sm
          "
        >

          {/* Quick Action */}

          <div
            className="
              rounded-3xl

              bg-gradient-to-br
              from-blue-600
              via-indigo-600
              to-violet-600

              p-7

              text-white

              shadow-2xl
            "
          >

            <p className="text-sm text-white/80">
              Quick Action
            </p>

            <h2
              className="
                mt-2

                text-3xl

                font-black
              "
            >
              Create New Task
            </h2>

            <p
              className="
                mt-4

                leading-7

                text-white/90
              "
            >
              Stay organized by creating a new task
              and planning your next achievement.
            </p>

            <Button
              size="lg"
              leftIcon={<Plus size={20} />}
              onClick={onAddTask}
              className="
                mt-8

                w-full

                rounded-2xl

                bg-white

                text-blue-700

                shadow-lg

                hover:bg-slate-100
              "
            >
              New Task
            </Button>

          </div>

          {/* Today's Focus */}

          <div
            className="
              rounded-3xl

              border

              border-slate-200/70

              bg-white/70

              p-6

              shadow-sm

              backdrop-blur-xl

              dark:border-slate-700
              dark:bg-slate-800/70
            "
          >

            <h3
              className="
                text-lg

                font-bold

                text-slate-900

                dark:text-white
              "
            >
              🎯 Today's Focus
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                <span className="text-slate-600 dark:text-slate-300">
                  Complete your highest priority task.
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Clock3
                  size={18}
                  className="text-amber-500"
                />

                <span className="text-slate-600 dark:text-slate-300">
                  Review pending tasks before ending your day.
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Target
                  size={18}
                  className="text-blue-600"
                />

                <span className="text-slate-600 dark:text-slate-300">
                  Stay focused and avoid distractions.
                </span>

              </div>

            </div>

          </div>

          {/* Goal Progress */}

          <div
            className="
              rounded-3xl

              border

              border-slate-200/70

              bg-white/70

              p-6

              shadow-sm

              backdrop-blur-xl

              dark:border-slate-700
              dark:bg-slate-800/70
            "
          >

            <div className="flex items-center justify-between">

              <h3
                className="
                  text-lg

                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Goal Progress
              </h3>

              <TrendingUp
                size={20}
                className="text-blue-600"
              />

            </div>

            <div className="mt-5">

              <div
                className="
                  h-3

                  overflow-hidden

                  rounded-full

                  bg-slate-200

                  dark:bg-slate-700
                "
              >

                <div
                  className="
                    h-full

                    rounded-full

                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600

                    transition-all
                    duration-700
                  "
                  style={{
                    width: `${productivity}%`,
                  }}
                />

              </div>

              <p
                className="
                  mt-3

                  text-sm

                  text-slate-500

                  dark:text-slate-400
                "
              >
                {productivity}% of today's work completed.
              </p>

            </div>

          </div>

        </div>

      </div>

    </Card>
  );
}

export default WelcomeBanner;