import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Computer Science Student",
    message:
      "Task Master helped me organize assignments and never miss important deadlines. The interface is clean and easy to use.",
  },
  {
    name: "Ali Khan",
    role: "Frontend Developer",
    message:
      "I really like the modern design and productivity features. It keeps my daily work organized in one place.",
  },
  {
    name: "Ayesha Noor",
    role: "Software Engineering Student",
    message:
      "The dashboard, calendar and analytics make planning my semester much easier. Great experience!",
  },
];

function Testimonials() {
  return (
    <section
      className="
        bg-white
        py-24

        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span
            className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700

              dark:bg-blue-500/10
              dark:text-blue-400
            "
          >
            Community Feedback
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              text-slate-900

              dark:text-white
            "
          >
            What People Like About Task Master
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
            Example feedback showing the type of experience
            Task Master aims to deliver for students,
            developers and professionals.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-blue-300

                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-blue-500
              "
            >

              <Quote
                size={34}
                className="text-blue-600"
              />

              <div className="mt-6 flex gap-1">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p
                className="
                  mt-6
                  leading-8
                  text-slate-600

                  dark:text-slate-400
                "
              >
                "{item.message}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4
                    className="
                      font-bold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    {item.name}
                  </h4>

                  <p
                    className="
                      text-sm
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;