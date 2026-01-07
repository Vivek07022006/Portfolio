export default function Skills() {
  const skills = ["JavaScript", "React", "Python", "MongoDB", "AI & Analytics"];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
