import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}>

      <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-green-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer">

        <div className="relative overflow-hidden">

          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
            />
          ) : (
            <div className="h-52 bg-gradient-to-br from-green-500/20 to-zinc-900 flex items-center justify-center">
              <span className="text-6xl">🤖</span>
            </div>
          )}

          {project.featured && (
            <div className="absolute top-4 right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              FEATURED
            </div>
          )}

        </div>

        <div className="p-6">

          <h2 className="text-2xl font-bold mb-3 text-white">
            {project.name}
          </h2>

          <p className="text-zinc-400 line-clamp-3">
            {project.description}
          </p>

          <div className="flex gap-2 mt-5 flex-wrap">

            {project.category && (
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                {project.category}
              </span>
            )}

            {project.type && (
              <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                {project.type}
              </span>
            )}

          </div>

        </div>

      </div>

    </Link>
  );
}