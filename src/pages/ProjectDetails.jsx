import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  ExternalLink,
  Eye,
  Calendar,
  User,
  CheckCircle,
  Star,
  Package,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../services/supabase";

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProject();
  }, [id]);

  async function loadProject() {
    setLoading(true);

    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("id", id)
      .single();

    if (!error && data) {
      const newViews = (data.views || 0) + 1;

      await supabase
        .from("Projects")
        .update({
          views: newViews,
        })
        .eq("id", id);

      setProject({
        ...data,
        views: newViews,
      });
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090B] text-white">
        <Navbar />

        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-32">
          <div className="w-full max-w-5xl animate-pulse space-y-6">

            <div className="h-80 rounded-3xl bg-zinc-900" />

            <div className="h-12 w-2/3 rounded-xl bg-zinc-900" />

            <div className="h-6 w-1/2 rounded-xl bg-zinc-900" />

            <div className="grid gap-6 md:grid-cols-3">
              {[1,2,3].map((i)=>(
                <div
                  key={i}
                  className="h-36 rounded-3xl bg-zinc-900"
                />
              ))}
            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090B] text-white">
        <Navbar />

        <div className="flex h-[70vh] flex-col items-center justify-center">

          <Boxes
            size={70}
            className="mb-6 text-zinc-600"
          />

          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-4 text-zinc-500">
            The requested project does not exist.
          </p>

          <Link
            to="/"
            className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black"
          >
            Go Home
          </Link>

        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-[#09090B]" />

          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[140px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14">

          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900">

            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="h-[360px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[360px] items-center justify-center bg-gradient-to-br from-emerald-500/20 to-black">
                <Boxes
                  size={90}
                  className="text-emerald-400"
                />
              </div>
            )}

            <div className="p-10">

              <div className="flex flex-wrap items-center gap-3">

                {project.category && (
                  <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    {project.category}
                  </span>
                )}

                {project.type && (
                  <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
                    {project.type}
                  </span>
                )}

                {project.verified && (
                  <span className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-medium">
                    <CheckCircle size={16} />
                    Verified
                  </span>
                )}

                {project.featured && (
                  <span className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium text-black">
                    <Star
                      size={16}
                      fill="currentColor"
                    />
                    Featured
                  </span>
                )}

              </div>

              <h1 className="mt-8 text-5xl font-black md:text-6xl">
                {project.name}
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
                {project.description}
              </p>
                            <div className="mt-12 grid gap-6 md:grid-cols-3">

                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-6">
                  <Eye className="mb-4 text-emerald-400" size={24} />
                  <p className="text-sm text-zinc-500">Views</p>
                  <p className="mt-2 text-3xl font-bold">
                    {project.views || 0}
                  </p>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-6">
                  <User className="mb-4 text-emerald-400" size={24} />
                  <p className="text-sm text-zinc-500">Builder</p>
                  <p className="mt-2 text-lg font-semibold">
                    {project.builder || "-"}
                  </p>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-6">
                  <Calendar className="mb-4 text-emerald-400" size={24} />
                  <p className="text-sm text-zinc-500">Launch Date</p>
                  <p className="mt-2 text-lg font-semibold">
                    {project.launch_date || "-"}
                  </p>
                </div>

              </div>

              <div className="mt-12 flex flex-wrap gap-4">

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 font-semibold text-black transition hover:scale-105"
                  >
                    <Globe size={18} />
                    Website
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 transition hover:border-emerald-500"
                  >
                    <ExternalLink size={18} />
                    GitHub
                  </a>
                )}

                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 transition hover:border-emerald-500"
                  >
                    <FileText size={18} />
                    Documentation
                  </a>
                )}

                {project.twitter && (
                  <a
                    href={project.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 transition hover:border-emerald-500"
                  >
                    <ExternalLink size={18} />
                    X / Twitter
                  </a>
                )}

              </div>

            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

              <h2 className="mb-6 text-2xl font-bold">
                Project Information
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500">Status</span>
                  <span>{project.status || "-"}</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500">Submitted By</span>
                  <span>{project.submitted_by || "-"}</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500">Category</span>
                  <span>{project.category || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">Type</span>
                  <span>{project.type || "-"}</span>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

              <h2 className="mb-6 text-2xl font-bold">
                About
              </h2>

              <p className="leading-8 text-zinc-400">
                {project.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}