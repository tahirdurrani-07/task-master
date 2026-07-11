import StatsCards from "./StatsCards";
import RecentTasks from "./RecentTasks";
import CalendarWidget from "./CalendarWidget";
import ActivityChart from "./ActivityChart";
import AnalyticsChart from "./AnalyticsChart";

// New Components
import UpcomingTasks from "./UpcomingTasks";
import RecentActivity from "./RecentActivity";

function DashboardGrid({ onEditTask }) {
  return (
    <div
      className="
        space-y-10
        animate-in
        fade-in
        duration-500
      "
    >

      {/* ======================================== */}
      {/* Statistics Section */}
      {/* ======================================== */}

      <section
        className="
          rounded-[32px]
          border
          border-slate-200/70
          bg-white/70
          p-6
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300

          dark:border-slate-700
          dark:bg-slate-900/70
        "
      >

        <StatsCards />

      </section>

      {/* ======================================== */}
      {/* Dashboard Grid */}
      {/* ======================================== */}

      <section
        className="
          grid
          gap-8
          lg:grid-cols-12
        "
      >

        {/* ======================================== */}
        {/* Left Column */}
        {/* ======================================== */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:col-span-8
          "
        >
          {/* ========================= */}
          {/* Today's Tasks */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200/70
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900/70
            "
          >

            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Today's Tasks
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Stay productive and complete your important work.
                </p>

              </div>

            </div>

            <RecentTasks
              onEditTask={onEditTask}
            />

          </div>

          {/* ========================= */}
          {/* Productivity Analytics */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200/70
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900/70
            "
          >

            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Productivity Analytics
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Track your progress and monitor your productivity.
                </p>

              </div>

            </div>

            <ActivityChart />

          </div>

          {/* ========================= */}
          {/* Task Analytics */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200/70
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900/70
            "
          >

            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Task Analytics
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Visual overview of your task distribution.
                </p>

              </div>

            </div>

            <AnalyticsChart />

          </div>

        </div>

        {/* ======================================== */}
        {/* Right Column */}
        {/* ======================================== */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:col-span-4
          "
        >
          {/* ========================= */}
          {/* Calendar */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200/70
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900/70
            "
          >

            <div className="mb-6">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Calendar
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                View your schedule and upcoming events.
              </p>

            </div>

            <CalendarWidget />

          </div>

          {/* ========================= */}
          {/* Upcoming Tasks */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200/70
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900/70
            "
          >

            <div className="mb-6">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Upcoming Tasks
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Never miss your important deadlines.
              </p>

            </div>

            <UpcomingTasks />

          </div>

          {/* ========================= */}
          {/* Recent Activity */}
          {/* ========================= */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200/70
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900/70
            "
          >

            <div className="mb-6">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Recent Activity
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Your latest completed and updated tasks.
              </p>

            </div>

            <RecentActivity />

          </div>

        </div>

      </section>

    </div>
  );
}

export default DashboardGrid;