import { LayoutGrid, Bot, Cpu, Wallet, Code2, Gamepad2 } from "lucide-react";

const categories = [
  {
    name: "All",
    icon: LayoutGrid,
    count: "150+",
  },
  {
    name: "AI Agents",
    icon: Bot,
    count: "80+",
  },
  {
    name: "Infrastructure",
    icon: Cpu,
    count: "32",
  },
  {
    name: "DeFi",
    icon: Wallet,
    count: "18",
  },
  {
    name: "Developer",
    icon: Code2,
    count: "24",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: "12",
  },
];

export default function Categories({
  selected = "All",
  onSelect = () => {},
}) {
  return (
    <section className="my-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Browse Categories
          </h2>

          <p className="mt-2 text-zinc-400">
            Discover every corner of the Ritual ecosystem.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => onSelect(item.name)}
              className={`group rounded-3xl border p-6 text-left transition-all duration-300 ${
                selected === item.name
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-zinc-800 bg-zinc-900 hover:-translate-y-1 hover:border-emerald-500/40"
              }`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                <Icon className="text-emerald-400" size={28} />
              </div>

              <h3 className="font-semibold text-white">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {item.count} Projects
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}