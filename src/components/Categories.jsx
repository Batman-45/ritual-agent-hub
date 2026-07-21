const categories = [
  "Research",
  "DeFi",
  "Social",
  "Coding",
  "Gaming",
  "Productivity",
];

export default function Categories() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-green-500 hover:text-green-400 transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}