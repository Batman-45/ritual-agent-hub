import { Search, X } from "lucide-react";

const categories = [
  "All",
  "AI Agent",
  "Infrastructure",
  "DeFi",
  "Gaming",
  "Developer Tool",
];

export default function SearchBar({
  value,
  onChange,
  category = "All",
  onCategoryChange = () => {},
}) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search projects, agents, tools..."
          className="
            w-full
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/70
            py-4
            pl-14
            pr-14
            text-white
            placeholder:text-zinc-500
            backdrop-blur
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-500/20
          "
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => onCategoryChange(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-emerald-500 text-black"
                : "border border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-emerald-500 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}