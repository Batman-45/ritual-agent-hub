export default function AgentCard({ agent }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">

      {/* Project Image */}
      {agent.image && (
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-52 object-cover"
        />
      )}

      <div className="p-6">

        {/* Project Name */}
        <h2 className="text-2xl font-bold">
          {agent.name}
        </h2>

        {/* Description */}
        <p className="text-zinc-400 mt-3 line-clamp-3">
          {agent.description}
        </p>

        {/* Information */}
        <div className="mt-5 space-y-2">

          <p>
            <span className="font-semibold text-white">
              Category:
            </span>{" "}
            {agent.category}
          </p>

          <p>
            <span className="font-semibold text-white">
              Type:
            </span>{" "}
            {agent.type}
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">

          {agent.website && (
            <a
              href={agent.website}
              target="_blank"
              rel="noreferrer"
              className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg transition"
            >
              🌐 Website
            </a>
          )}

          {agent.github && (
            <a
              href={agent.github}
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg transition"
            >
              💻 GitHub
            </a>
          )}

          {agent.twitter && (
            <a
              href={agent.twitter}
              target="_blank"
              rel="noreferrer"
              className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg transition"
            >
              🐦 Twitter
            </a>
          )}

        </div>

      </div>

    </div>
  );
}