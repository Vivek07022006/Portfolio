import projects from "../data/projects.json";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        bg-gray-100 dark:bg-zinc-900
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="
            text-4xl font-bold mb-12 text-center
            text-gray-900 dark:text-white
          "
        >
          Projects
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="
                p-6 rounded-xl
                bg-white dark:bg-zinc-800
                border border-gray-200 dark:border-zinc-700
                hover:-translate-y-2 hover:shadow-xl
                transition-all
              "
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {p.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {p.desc}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                {p.tech.join(" • ")}
              </p>

              <a
                href={p.link || "#"}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
