import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) {
      setProject(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <Link
          to="/"
          className="text-green-400 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover rounded-2xl mb-8"
            />
          )}

          <h1 className="text-5xl font-black">
            {project.name}
          </h1>

          <div className="flex gap-3 mt-5 flex-wrap">

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              {project.category}
            </span>

            <span className="bg-zinc-800 px-4 py-2 rounded-full">
              {project.type}
            </span>

            {project.verified && (
              <span className="bg-blue-500 px-4 py-2 rounded-full">
                ✔ Verified
              </span>
            )}

            {project.featured && (
              <span className="bg-yellow-500 text-black px-4 py-2 rounded-full">
                ⭐ Featured
              </span>
            )}

          </div>

          <p className="mt-8 text-lg text-zinc-300 leading-8">
            {project.description}
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div>
              <h3 className="text-zinc-400">Builder</h3>
              <p>{project.builder || "-"}</p>
            </div>

            <div>
              <h3 className="text-zinc-400">Submitted By</h3>
              <p>{project.submitted_by || "-"}</p>
            </div>

            <div>
              <h3 className="text-zinc-400">Launch Date</h3>
              <p>{project.launch_date || "-"}</p>
            </div>

            <div>
              <h3 className="text-zinc-400">Status</h3>
              <p>{project.status}</p>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold"
              >
                Website
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 px-6 py-3 rounded-xl"
              >
                GitHub
              </a>
            )}

            {project.documentation && (
              <a
                href={project.documentation}
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 px-6 py-3 rounded-xl"
              >
                Docs
              </a>
            )}

            {project.twitter && (
              <a
                href={project.twitter}
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 px-6 py-3 rounded-xl"
              >
                Twitter
              </a>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}