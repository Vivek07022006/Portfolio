import achievements from "../data/achievements.json";

export default function Leadership() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Leadership & Impact</h2>
      {achievements.map((a, i) => (
        <p key={i} className="mb-2">
          • {a.title} ({a.year})
        </p>
      ))}
    </section>
  );
}
