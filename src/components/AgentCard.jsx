import { Link } from "react-router-dom";
import {
  Bot,
  ArrowUpRight,
  Cpu,
  Brain,
  Sparkles,
} from "lucide-react";

export default function AgentCard({ agent }) {
  return (
    <Link to={`/agent/${agent.id}`}>
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">

        {/* Header */}
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-black">

          {agent.image ? (
            <img
              src={agent.image}
              alt={agent.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <Bot size={60} className="text-emerald-400" />
          )}

          <div className="absolute right-4 top-4 rounded-full bg-black/50 p-2 backdrop-blur">
            <Sparkles size={18} className="text-emerald-400" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-6">

          <div>
            <h2 className="text-xl font-bold text-white transition group-hover:text-emerald-400">
              {agent.name}
            </h2>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
              {agent.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {agent.category && (
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                {agent.category}
              </span>
            )}

            {agent.model && (
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                {agent.model}
              </span>
            )}

            {agent.framework && (
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                {agent.framework}
              </span>
            )}

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-zinc-800/60 p-3">
              <Cpu className="mb-2 text-emerald-400" size={18} />
              <p className="text-xs text-zinc-500">Framework</p>
              <p className="text-sm font-medium text-white">
                {agent.framework || "-"}
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-800/60 p-3">
              <Brain className="mb-2 text-emerald-400" size={18} />
              <p className="text-xs text-zinc-500">Model</p>
              <p className="text-sm font-medium text-white">
                {agent.model || "-"}
              </p>
            </div>

          </div>

          <div className="flex items-center justify-end border-t border-zinc-800 pt-5">

            <span className="flex items-center gap-2 text-sm text-zinc-400 transition group-hover:text-white">
              View Agent
              <ArrowUpRight size={18} />
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}