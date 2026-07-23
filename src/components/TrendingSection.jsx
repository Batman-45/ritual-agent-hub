import { Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function TrendingSection({ projects = [] }) {
  const trending = [...projects]
    .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    .slice(0, 6);

  if (!trending.length) return null;

  return (
    <section className="my-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            <Flame size={16} />
            Trending Now
          </div>

          <h2 className="text-4xl font-bold text-white">
            Most Popular Projects
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Discover the projects gaining the most attention from the Ritual
            community.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-500 hover:bg-zinc-800"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {trending.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}