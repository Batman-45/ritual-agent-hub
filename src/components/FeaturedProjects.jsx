import ProjectCard from "./ProjectCard";
import projects from "../data/agents";

export default function FeaturedProjects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-2">
            Explore community-built projects in the Ritual ecosystem.
          </p>
        </div>

        <button className="border border-zinc-700 hover:border-green-500 px-5 py-2 rounded-lg">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}