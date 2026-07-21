import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "../services/supabase";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("all");

  async function loadProjects() {
    setLoading(true);

    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error(error.message);
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function approveProject(id) {
    const { error } = await supabase
      .from("Projects")
      .update({
        status: "approved",
      })
      .eq("id", id);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Project Approved");
    loadProjects();
  }

  async function toggleFeatured(project) {
    const { error } = await supabase
      .from("Projects")
      .update({
        featured: !project.featured,
      })
      .eq("id", project.id);

    if (error) {
      toast.error(error.message);
      return;
    }

    loadProjects();
  }

  async function toggleVerified(project) {
    const { error } = await supabase
      .from("Projects")
      .update({
        verified: !project.verified,
      })
      .eq("id", project.id);

    if (error) {
      toast.error(error.message);
      return;
    }

    loadProjects();
  }

  async function deleteProject(id) {
    if (!confirm("Delete project?")) return;

    const { error } = await supabase
      .from("Projects")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Deleted");
    loadProjects();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-black mb-2">
          Admin Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Manage submitted Ritual projects
        </p>

        {loading ? (
          <div className="text-zinc-500">
            Loading...
          </div>
        ) : (
                    <div className="overflow-x-auto rounded-2xl border border-zinc-800">

            <table className="w-full">

              <thead className="bg-zinc-900">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Project
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left">
                    Featured
                  </th>

                  <th className="px-6 py-4 text-left">
                    Verified
                  </th>

                  <th className="px-6 py-4 text-left">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {projects.map((project) => (

                  <tr
                    key={project.id}
                    className="border-t border-zinc-800"
                  >

                    <td className="px-6 py-5">

                      <div className="font-bold">
                        {project.name}
                      </div>

                      <div className="text-sm text-zinc-500">
                        {project.category}
                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          project.status === "approved"
                            ? "bg-green-500 text-black"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        {project.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">
                      {project.featured ? "⭐ Yes" : "No"}
                    </td>

                    <td className="px-6 py-5">
                      {project.verified ? "✔ Yes" : "No"}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex flex-wrap gap-2">

                        {project.status !== "approved" && (
                          <button
                            onClick={() =>
                              approveProject(project.id)
                            }
                            className="rounded-lg bg-green-500 px-3 py-2 text-sm font-bold text-black"
                          >
                            Approve
                          </button>
                        )}

                        <button
                          onClick={() =>
                            toggleFeatured(project)
                          }
                          className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-bold text-white"
                        >
                          Feature
                        </button>

                        <button
                          onClick={() =>
                            toggleVerified(project)
                          }
                          className="rounded-lg bg-purple-500 px-3 py-2 text-sm font-bold text-white"
                        >
                          Verify
                        </button>

                        <button
                          onClick={() =>
                            deleteProject(project.id)
                          }
                          className="rounded-lg bg-red-500 px-3 py-2 text-sm font-bold text-white"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
          