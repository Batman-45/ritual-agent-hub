import ProjectCard from "./ProjectCard";

export default function FeaturedSection({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex items-center justify-between mb-10">

        <div>
          <p className="text-green-400 font-semibold uppercase tracking-wider">
            Featured
          </p>

          <h2 className="text-4xl font-black text-white mt-2">
            Featured dApps
          </h2>

          <p className="text-zinc-400 mt-3">
            Hand-picked projects from the Ritual ecosystem.
          </p>
        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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