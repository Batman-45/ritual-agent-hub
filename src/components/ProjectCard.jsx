import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Star,
  ThumbsUp,
  Sparkles,
} from "lucide-react";

import {
  getUpvoteCount,
  hasUserUpvoted,
  toggleUpvote,
} from "../utils/upvote";

export default function ProjectCard({ project }) {
  const [votes, setVotes] = useState(0);
  const [liked, setLiked] = useState(false);

  const email = localStorage.getItem("user_email");

  useEffect(() => {
    loadVotes();
  }, []);

  async function loadVotes() {
    const count = await getUpvoteCount(project.id);
    setVotes(count);

    if (email) {
      const voted = await hasUserUpvoted(project.id, email);
      setLiked(voted);
    }
  }

  async function handleVote(e) {
    e.preventDefault();
    e.stopPropagation();

    const state = await toggleUpvote(project.id, email);

    setLiked(state);

    const count = await getUpvoteCount(project.id);
    setVotes(count);
  }

  return (
    <Link to={`/project/${project.id}`}>
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">

        {/* Banner */}
        <div className="relative h-56 overflow-hidden">

          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-500/20 via-zinc-900 to-black">
              <Sparkles size={56} className="text-emerald-400" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {project.featured && (
            <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-black">
              <Star size={12} fill="currentColor" />
              FEATURED
            </div>
          )}

          {project.category && (
            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
              {project.category}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">

          <div>
            <h2 className="text-2xl font-bold text-white transition group-hover:text-emerald-400">
              {project.name}
            </h2>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {project.type && (
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                {project.type}
              </span>
            )}

            {project.chain && (
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                {project.chain}
              </span>
            )}

          </div>

          <div className="flex items-center justify-between border-t border-zinc-800 pt-5">

            <button
              onClick={handleVote}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                liked
                  ? "bg-emerald-500 text-black"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              <ThumbsUp size={16} />
              {votes}
            </button>

            <div className="flex items-center gap-2 text-sm text-zinc-400 transition group-hover:text-white">
              View Details
              <ArrowUpRight size={18} />
            </div>

          </div>

        </div>
      </article>
    </Link>
  );
}