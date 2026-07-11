import {
  CheckSquare,
  Mail,
  Code2,
  Globe,
  Heart,
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                "
              >
                <CheckSquare
                  size={26}
                  className="text-white"
                />
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Task Master
                </h2>

                <p className="text-sm text-slate-400">
                  Productivity Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Organize your work, increase productivity and achieve
              your goals with a beautiful modern task management
              platform.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>
                <a
                  href="#features"
                  className="transition hover:text-blue-400"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#developer"
                  className="transition hover:text-blue-400"
                >
                  Developer
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-blue-400"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="mailto:tahirdurrani07@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  transition
                  hover:text-blue-400
                "
              >
                <Mail size={18} />
                tahirdurrani07@gmail.com
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  transition
                  hover:text-blue-400
                "
              >
                <Code2 size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  transition
                  hover:text-blue-400
                "
              >
                <Globe size={18} />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Developer */}

          <div>

            <h3 className="text-xl font-semibold">
              Developer
            </h3>

            <p className="mt-6 leading-7 text-slate-400">
              Designed & Developed by
              <span className="font-semibold text-white">
                {" "}
                Tahir Ullah Khan
              </span>
            </p>

            <p className="mt-4 text-slate-400">
              Computer Science Student
              <br />
              UET Mardan
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-slate-800
            pt-8
            md:flex-row
          "
        >

          <p className="text-slate-400">
            © {year} Task Master. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-400">

            Made with

            <Heart
              size={18}
              className="fill-red-500 text-red-500"
            />

            by

            <span className="font-semibold text-white">
              Tahir Ullah Khan
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;