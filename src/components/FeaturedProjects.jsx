import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedProjects({ projects = [] }) {
  const featured = projects
    .filter((p) => p.featured)
    .slice(0, 3);

  if (!featured.length) return null;

  return (
    <section className="my-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            <Sparkles size={16} />
            Featured Ecosystem
          </div>

          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Hand-picked projects showcasing innovation across the Ritual
            ecosystem.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_45px_rgba(16,185,129,0.15)]"
          >
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

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-black">
                <Star size={12} fill="currentColor" />
                FEATURED
              </div>

              {project.category && (
                <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
                  {project.category}
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white transition group-hover:text-emerald-400">
                {project.name}
              </h3>

              <p className="mt-3 line-clamp-3 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5">
                <span className="text-sm text-zinc-500">
                  Explore Project
                </span>

                <ArrowUpRight
                  className="text-emerald-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={20}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}