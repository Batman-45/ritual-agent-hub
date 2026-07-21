export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

      {[
        ["200+", "Projects"],
        ["60+", "Builders"],
        ["15", "Categories"],
        ["100%", "Open Source"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="bg-zinc-900 rounded-2xl p-6 border border-green-900"
        >
          <h2 className="text-3xl font-bold text-green-400">
            {value}
          </h2>

          <p className="text-zinc-400 mt-2">
            {label}
          </p>
        </div>
      ))}

    </div>
  );
}