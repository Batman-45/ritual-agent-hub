import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-full my-10">

      {/* Search Icon */}

      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-green-400"
      />

      {/* Input */}

      <input
        type="text"
        placeholder="Search projects, AI agents, tools..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          h-16
          rounded-2xl
          bg-zinc-900/80
          backdrop-blur
          border
          border-zinc-800
          pl-14
          pr-14
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-green-500
          focus:ring-4
          focus:ring-green-500/20
        "
      />

      {/* Clear Button */}

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-zinc-500
            hover:text-green-400
            transition
          "
        >
          <X size={20} />
        </button>
      )}

    </div>
  );
}