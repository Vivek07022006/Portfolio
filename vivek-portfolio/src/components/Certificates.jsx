import certs from "../data/certificates.json";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        py-24
        bg-gray-50 dark:bg-black
        transition-colors duration-500
      "
    >
      <h2 className="
        text-4xl font-bold text-center mb-10
        text-gray-900 dark:text-white
      ">
        Certifications
      </h2>

      <div className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory">
        {certs.map((c, i) => (
          <div
            key={i}
            className="
              min-w-[280px] snap-center
              p-6 rounded-xl
              bg-white dark:bg-zinc-800
              border border-gray-200 dark:border-zinc-700
              hover:scale-105
              transition-all
            "
          >
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              {c.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              {c.org}
            </p>

            <p className="text-sm text-gray-500">
              {c.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
