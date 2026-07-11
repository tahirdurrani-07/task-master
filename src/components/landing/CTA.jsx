import { Link } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
} from "lucide-react";

function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
      "
    >

      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-700
          via-indigo-700
          to-purple-700
        "
      />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-white/20
            backdrop-blur-md
          "
        >
          <Rocket
            size={40}
            className="text-white"
          />
        </div>

        <h2
          className="
            mt-8
            text-5xl
            font-extrabold
            leading-tight
            text-white
          "
        >
          Ready To Boost
          <br />
          Your Productivity?
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-blue-100
          "
        >
          Join Task Master today and organize your
          tasks, monitor your progress, and achieve
          your goals with a modern productivity
          platform built for students, developers
          and professionals.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/register"
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-8
              py-4
              text-lg
              font-bold
              text-blue-700
              shadow-xl
              transition-all

              hover:scale-105
            "
          >
            Create Free Account

            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="
              rounded-2xl
              border
              border-white/40
              bg-white/10
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              backdrop-blur-md
              transition-all

              hover:bg-white/20
            "
          >
            Sign In
          </Link>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">

          <span>✓ Free Registration</span>

          <span>✓ Modern Dashboard</span>

          <span>✓ Secure Login</span>

          <span>✓ Responsive Design</span>

        </div>

      </div>

    </section>
  );
}

export default CTA;