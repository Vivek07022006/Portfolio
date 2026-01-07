import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Hero() {
  return (
    <section className="
      h-[95vh] flex items-center justify-center text-center
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-black dark:via-zinc-900 dark:to-black
      transition-colors duration-500
    ">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl px-6"
      >
        <h1 className="
          text-5xl md:text-7xl font-extrabold mb-6
          text-gray-900 dark:text-white
        ">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Vivek
          </span>{" "}
          👋
        </h1>

        <p className="
          text-lg md:text-xl mb-8
          text-gray-600 dark:text-gray-400
        ">
          Building intelligent, impactful digital solutions with technology,
          leadership, and creativity.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="
              px-6 py-3 rounded-lg font-medium
              bg-blue-600 text-white
              hover:bg-blue-700
              transition
            "
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-lg font-medium
              border
              border-gray-400 dark:border-gray-600
              text-gray-800 dark:text-gray-200
              hover:bg-gray-200 dark:hover:bg-zinc-800
              transition
            "
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
