import { Link } from "react-router-dom";

import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        pt-28

        dark:bg-slate-950
      "
    >

      {/* ===================================== */}
      {/* Background Effects */}
      {/* ===================================== */}

      {/* Blue Glow */}

      <div
        className="
          absolute
          -left-52
          -top-44

          h-[560px]
          w-[560px]

          rounded-full

          bg-blue-500/20

          blur-[170px]
        "
      />

      {/* Purple Glow */}

      <div
        className="
          absolute
          right-0
          top-20

          h-[520px]
          w-[520px]

          rounded-full

          bg-violet-500/20

          blur-[170px]
        "
      />

      {/* Cyan Glow */}

      <div
        className="
          absolute
          bottom-0
          left-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/20

          blur-[170px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-40

          dark:opacity-20

          [background-image:linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* Gradient Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-white/70
          via-white/40
          to-white

          dark:from-slate-950/70
          dark:via-slate-950/40
          dark:to-slate-950
        "
      />

      {/* ===================================== */}
      {/* Main Container */}
      {/* ===================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          flex

          min-h-screen

          max-w-7xl

          items-center

          px-6
        "
      >

        <div
          className="
            grid

            items-center

            gap-20

            lg:grid-cols-2
          "
        >

          {/* ===================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================== */}

          <div>

            {/* Trust Badge */}

            <div
              className="
                inline-flex

                items-center

                gap-3

                rounded-full

                border

                border-blue-200

                bg-white/80

                px-5

                py-3

                text-sm

                font-semibold

                shadow-lg

                backdrop-blur-xl

                dark:border-slate-700

                dark:bg-slate-900/80
              "
            >

              <div className="flex text-yellow-400">

                <Star
                  size={16}
                  fill="currentColor"
                />

                <Star
                  size={16}
                  fill="currentColor"
                />

                <Star
                  size={16}
                  fill="currentColor"
                />

                <Star
                  size={16}
                  fill="currentColor"
                />

                <Star
                  size={16}
                  fill="currentColor"
                />

              </div>

              <span className="text-slate-700 dark:text-slate-200">

                Trusted by

                <span className="font-bold text-blue-600">
                  {" "}
                  5,000+
                </span>

                {" "}users

              </span>

            </div>
            {/* Hero Title */}

            <h1
              className="
                mt-10

                text-5xl

                font-black

                leading-tight

                tracking-tight

                text-slate-900

                md:text-6xl

                xl:text-7xl

                dark:text-white
              "
            >

              Organize Work

              <br />

              <span
                className="
                  bg-gradient-to-r

                  from-blue-600

                  via-indigo-600

                  to-violet-600

                  bg-clip-text

                  text-transparent
                "
              >
                Faster.
              </span>

              <br />

              Smarter.

              <br />

              Together.

            </h1>

            {/* Description */}

            <p
              className="
                mt-8

                max-w-2xl

                text-lg

                leading-9

                text-slate-600

                dark:text-slate-400
              "
            >
              Task Master is a modern SaaS productivity platform
              designed for students, developers and teams to
              organize projects, manage deadlines, collaborate
              efficiently and boost productivity with a beautiful,
              fast and intuitive workspace.
            </p>

            {/* Community */}

            <div
              className="
                mt-10

                flex

                flex-wrap

                items-center

                gap-6
              "
            >

              {/* Avatars */}

              <div className="flex -space-x-4">

                {[
                  "A",
                  "J",
                  "S",
                  "M",
                  "T",
                ].map((user) => (

                  <div
                    key={user}
                    className="
                      flex

                      h-12

                      w-12

                      items-center

                      justify-center

                      rounded-full

                      border-4

                      border-white

                      bg-gradient-to-br

                      from-blue-500

                      to-indigo-600

                      font-bold

                      text-white

                      shadow-lg

                      dark:border-slate-950
                    "
                  >
                    {user}
                  </div>

                ))}

              </div>

              {/* Community Text */}

              <div>

                <div className="flex items-center gap-2">

                  <Users
                    size={18}
                    className="text-blue-600"
                  />

                  <span className="font-bold text-slate-900 dark:text-white">

                    5,000+

                  </span>

                  <span className="text-slate-600 dark:text-slate-400">

                    Active Users

                  </span>

                </div>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">

                  Trusted by students, developers & startups.

                </p>

              </div>

            </div>

            {/* Statistics */}

            <div
              className="
                mt-12

                grid

                grid-cols-3

                gap-8
              "
            >

              <div>

                <h2 className="text-4xl font-black text-blue-600">

                  50K+

                </h2>

                <p className="mt-2 text-slate-600 dark:text-slate-400">

                  Tasks Managed

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-indigo-600">

                  99%

                </h2>

                <p className="mt-2 text-slate-600 dark:text-slate-400">

                  Productivity

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-violet-600">

                  24/7

                </h2>

                <p className="mt-2 text-slate-600 dark:text-slate-400">

                  Cloud Access

                </p>

              </div>

            </div>
            {/* CTA Buttons */}

            <div
              className="
                mt-14
                flex
                flex-wrap
                items-center
                gap-5
              "
            >

              {/* Get Started */}

              <Link
                to="/register"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-violet-600

                  px-8
                  py-4

                  text-lg
                  font-semibold
                  text-white

                  shadow-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Start For Free

                <ArrowRight
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

              {/* Watch Demo */}

              <Link
                to="/login"
                className="
                  group

                  inline-flex

                  items-center

                  gap-3

                  rounded-2xl

                  border

                  border-slate-300

                  bg-white/70

                  px-8

                  py-4

                  text-lg

                  font-semibold

                  text-slate-700

                  shadow-lg

                  backdrop-blur-xl

                  transition-all

                  duration-300

                  hover:-translate-y-1

                  hover:border-blue-500

                  hover:text-blue-600

                  dark:border-slate-700

                  dark:bg-slate-900/70

                  dark:text-slate-200
                "
              >

                <PlayCircle
                  size={22}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                Watch Demo

              </Link>

            </div>

            {/* Feature Pills */}

            <div
              className="
                mt-14

                flex

                flex-wrap

                gap-4
              "
            >

              {[
                "No Credit Card",
                "Free Forever",
                "Cloud Sync",
                "Dark Mode",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full

                    border

                    border-slate-200

                    bg-white/80

                    px-5

                    py-3

                    text-sm

                    font-semibold

                    text-slate-700

                    shadow-md

                    backdrop-blur-xl

                    dark:border-slate-700

                    dark:bg-slate-900/70

                    dark:text-slate-300
                  "
                >

                  <CheckCircle2
                    size={16}
                    className="
                      mr-2
                      inline
                      text-green-500
                    "
                  />

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* ===================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================== */}

          <div className="relative">

            {/* Floating Background Card */}

            <div
              className="
                absolute

                -right-10

                -top-10

                h-72

                w-72

                rounded-full

                bg-blue-500/20

                blur-[120px]
              "
            />
            {/* Dashboard Card */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[32px]

                border
                border-slate-200

                bg-white/90

                p-8

                shadow-[0_25px_80px_rgba(37,99,235,0.15)]

                backdrop-blur-xl

                dark:border-slate-800
                dark:bg-slate-900/90
              "
            >

              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Welcome Back 👋
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                    Tahir
                  </h3>

                </div>

                <div
                  className="
                    rounded-2xl
                    bg-blue-600
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Pro
                </div>

              </div>

              {/* Progress */}

              <div className="mt-8">

                <div className="mb-3 flex items-center justify-between">

                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Weekly Progress
                  </span>

                  <span className="font-bold text-blue-600">
                    78%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800">

                  <div
                    className="
                      h-3
                      w-[78%]
                      rounded-full
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                    "
                  />

                </div>

              </div>

              {/* Tasks */}

              <div className="mt-10 space-y-4">

                {[
                  {
                    title: "Complete React Project",
                    color: "bg-blue-500",
                  },
                  {
                    title: "Study Database Systems",
                    color: "bg-green-500",
                  },
                  {
                    title: "Practice DSA",
                    color: "bg-yellow-500",
                  },
                  {
                    title: "Deploy Portfolio",
                    color: "bg-purple-500",
                  },
                ].map((task) => (

                  <div
                    key={task.title}
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      border

                      border-slate-200

                      p-4

                      dark:border-slate-800
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className={`h-3 w-3 rounded-full ${task.color}`}
                      />

                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {task.title}
                      </span>

                    </div>

                    <CheckCircle2
                      size={20}
                      className="text-green-500"
                    />

                  </div>

                ))}

              </div>

              {/* Analytics */}

              <div className="mt-10 grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-blue-50 p-5 dark:bg-slate-800">

                  <p className="text-sm text-slate-500">
                    Tasks
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-blue-600">
                    148
                  </h4>

                </div>

                <div className="rounded-2xl bg-green-50 p-5 dark:bg-slate-800">

                  <p className="text-sm text-slate-500">
                    Completed
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-green-600">
                    124
                  </h4>

                </div>

                <div className="rounded-2xl bg-purple-50 p-5 dark:bg-slate-800">

                  <p className="text-sm text-slate-500">
                    Productivity
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-purple-600">
                    92%
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;