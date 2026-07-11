import {
  GraduationCap,
  Briefcase,
  Mail,
  Code2,
  BrainCircuit,
  Globe,
  Award,
  Sparkles,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import tahirImage from "../../assets/images/tahir.jpg";

function AboutDeveloper() {
  return (
    <section
      id="developer"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100
        py-28

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-24
            top-0
            h-96
            w-96
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-40
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-violet-500/10
            blur-3xl
          "
        />

      </div>

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-2

              dark:border-blue-500/20
              dark:bg-blue-500/10
            "
          >

            <Sparkles
              size={16}
              className="text-blue-600"
            />

            <span
              className="
                text-sm
                font-semibold
                text-blue-700

                dark:text-blue-300
              "
            >
              Meet The Developer
            </span>

          </div>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              tracking-tight
              text-slate-900

              md:text-6xl

              dark:text-white
            "
          >
            Built With Passion

            <span className="ml-3">
              ❤️
            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600

              dark:text-slate-400
            "
          >
            Task Master is designed and developed to deliver a
            modern, elegant and productivity-focused experience
            for students, developers and professionals around
            the world.
          </p>

        </div>

        {/* Main Grid Starts Here */}

        <div
          className="
            mt-20
            grid
            items-center
            gap-20

            lg:grid-cols-2
          "
        >
            {/* ================================= */}
          {/* Left Side - Professional Profile */}
          {/* ================================= */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  scale-110
                  rounded-full
                  bg-blue-500/20
                  blur-3xl
                "
              />

              {/* Decorative Ring */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-full
                  border-2
                  border-blue-500/20
                  border-dashed
                  animate-spin
                "
                style={{
                  animationDuration: "20s",
                }}
              />

              {/* Main Image */}

              <img
                src={tahirImage}
                alt="Tahir Ullah Khan"
                className="
                  relative
                  h-[420px]
                  w-[420px]
                  rounded-full
                  object-cover
                  border-[10px]
                  border-white
                  shadow-[0_30px_80px_rgba(37,99,235,0.25)]

                  dark:border-slate-800
                "
              />

              {/* Verified Badge */}

              <div
                className="
                  absolute
                  bottom-10
                  right-4

                  flex
                  items-center
                  gap-2

                  rounded-2xl

                  bg-white

                  px-4
                  py-3

                  shadow-xl

                  dark:bg-slate-900
                "
              >

                <BadgeCheck
                  className="text-blue-600"
                  size={22}
                />

                <div>

                  <p
                    className="
                      text-sm
                      font-bold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    Verified Developer
                  </p>

                  <p
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    Full Stack Engineer
                  </p>

                </div>

              </div>

              {/* Floating Card */}

              <div
                className="
                  absolute
                  left-0
                  top-8
                  -translate-x-10

                  rounded-3xl

                  bg-white/90

                  px-5
                  py-4

                  shadow-xl

                  backdrop-blur-xl

                  dark:bg-slate-900/90
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-2xl

                      bg-blue-100

                      dark:bg-blue-500/20
                    "
                  >

                    <Award
                      size={24}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <p
                      className="
                        text-2xl
                        font-black
                        text-slate-900

                        dark:text-white
                      "
                    >
                      10+
                    </p>

                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Projects Built
                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom Card */}

              <div
                className="
                  absolute
                  -bottom-6
                  left-1/2

                  -translate-x-1/2

                  rounded-3xl

                  bg-gradient-to-r

                  from-blue-600
                  to-indigo-600

                  px-8
                  py-5

                  text-white

                  shadow-2xl
                "
              >

                <div className="flex items-center gap-3">

                  <MapPin size={22} />

                  <div>

                    <p className="text-sm opacity-80">
                      Based In
                    </p>

                    <p className="font-bold">
                      Mardan, Pakistan
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
          {/* ================================= */}
          {/* Right Side - Developer Details */}
          {/* ================================= */}

          <div>

            {/* Name */}

            <h3
              className="
                text-5xl
                font-black
                tracking-tight
                text-slate-900

                dark:text-white
              "
            >
              Tahir Ullah Khan
            </h3>

            {/* Role */}

            <p
              className="
                mt-4
                text-2xl
                font-bold
                text-blue-600
              "
            >
              Full Stack Web Developer
            </p>

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
              I'm a Computer Science student at
              <span className="font-semibold text-slate-900 dark:text-white">
                {" "}UET Mardan
              </span>
              {" "}who is passionate about building
              beautiful, scalable and high-performance web
              applications.

              I enjoy transforming innovative ideas into
              modern digital products using React,
              JavaScript, Tailwind CSS, Node.js and
              MongoDB while continuously improving my
              software engineering skills.
            </p>

            {/* Highlights */}

            <div className="mt-10 space-y-6">

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

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

                  <GraduationCap
                    className="text-blue-600"
                    size={26}
                  />

                </div>

                <div>

                  <h4
                    className="
                      text-lg
                      font-bold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    Education
                  </h4>

                  <p
                    className="
                      mt-1
                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    Bachelor of Computer Science
                    <br />
                    University of Engineering &
                    Technology Mardan
                  </p>

                </div>

              </div>

              {/* Experience */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

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

                  <Briefcase
                    className="text-green-600"
                    size={26}
                  />

                </div>

                <div>

                  <h4
                    className="
                      text-lg
                      font-bold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    Specialization
                  </h4>

                  <p
                    className="
                      mt-1
                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    Full Stack Web Development,
                    Modern React Applications,
                    Responsive UI/UX Design
                  </p>

                </div>

              </div>

              {/* AI */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-purple-100

                    dark:bg-purple-500/20
                  "
                >

                  <BrainCircuit
                    className="text-purple-600"
                    size={26}
                  />

                </div>

                <div>

                  <h4
                    className="
                      text-lg
                      font-bold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    Interests
                  </h4>

                  <p
                    className="
                      mt-1
                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    Artificial Intelligence,
                    Software Engineering,
                    UI/UX Design,
                    Open Source,
                    Cloud Computing
                  </p>

                </div>

              </div>

            </div>
            {/* ================================= */}
            {/* Skills */}
            {/* ================================= */}

            <div className="mt-12">

              <h4
                className="
                  text-xl
                  font-bold
                  text-slate-900

                  dark:text-white
                "
              >
                Technical Skills
              </h4>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "HTML5",
                  "CSS3",
                  "Git",
                  "GitHub",
                  "Python",
                  "C++",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-blue-200
                      bg-blue-50
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-blue-700
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:bg-blue-600
                      hover:text-white

                      dark:border-blue-500/20
                      dark:bg-blue-500/10
                      dark:text-blue-300
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* ================================= */}
            {/* Achievement Cards */}
            {/* ================================= */}

            <div className="mt-12 grid gap-5 sm:grid-cols-3">

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/70
                  p-6
                  text-center
                  shadow-sm
                  backdrop-blur-xl

                  dark:border-slate-700
                  dark:bg-slate-800/70
                "
              >

                <Award
                  className="mx-auto text-blue-600"
                  size={34}
                />

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    text-slate-900

                    dark:text-white
                  "
                >
                  10+
                </h3>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Projects
                </p>

              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/70
                  p-6
                  text-center
                  shadow-sm
                  backdrop-blur-xl

                  dark:border-slate-700
                  dark:bg-slate-800/70
                "
              >

                <GraduationCap
                  className="mx-auto text-green-600"
                  size={34}
                />

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    text-slate-900

                    dark:text-white
                  "
                >
                  CS
                </h3>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Student
                </p>

              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/70
                  p-6
                  text-center
                  shadow-sm
                  backdrop-blur-xl

                  dark:border-slate-700
                  dark:bg-slate-800/70
                "
              >

                <BrainCircuit
                  className="mx-auto text-purple-600"
                  size={34}
                />

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    text-slate-900

                    dark:text-white
                  "
                >
                  AI
                </h3>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Enthusiast
                </p>

              </div>

            </div>

            {/* ================================= */}
            {/* Contact Buttons */}
            {/* ================================= */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="mailto:tahirdurrani07@gmail.com"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all

                  hover:-translate-y-1
                  hover:bg-blue-700
                "
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  transition-all

                  hover:-translate-y-1
                  hover:bg-slate-100

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:bg-slate-800
                "
              >
                <Code2 size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  transition-all

                  hover:-translate-y-1
                  hover:bg-slate-100

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:bg-slate-800
                "
              >
                <Globe size={18} />
                LinkedIn
              </a>

            </div>
            {/* ================================= */}
            {/* Personal Quote */}
            {/* ================================= */}

            <div
              className="
                mt-12
                rounded-3xl
                border
                border-slate-200
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-violet-600
                p-8
                text-white
                shadow-2xl
              "
            >

              <p className="text-sm uppercase tracking-[0.25em] text-white/80">
                Personal Motto
              </p>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-bold
                  leading-relaxed
                "
              >
                "Technology is most powerful when it helps people
                solve real-world problems. I strive to build
                software that is fast, beautiful and meaningful."
              </h3>

              <p className="mt-6 text-white/80">
                — Tahir Ullah Khan
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutDeveloper;