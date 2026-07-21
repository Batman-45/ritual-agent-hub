import { useEffect, useMemo, useState } from "react";
import { supabase } from "../services/supabase";

import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";
import LoadingCards from "./LoadingCards";
import Footer from "./Footer";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);

    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setProjects([]);
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  }

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        projects
          .map((p) => p.category)
          .filter(Boolean)
      ),
    ];
  }, [projects]);

  const featuredProjects = projects.filter((p) => p.featured);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const q = search.toLowerCase();

      const matchesSearch =
        project.name?.toLowerCase().includes(q) ||
        project.description?.toLowerCase().includes(q) ||
        project.category?.toLowerCase().includes(q) ||
        project.type?.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projects, search, selectedCategory]);

  const totalProjects = projects.length;

  const totalCategories = new Set(
    projects
      .map((p) => p.category)
      .filter(Boolean)
  ).size;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <Hero />

      <div className="max-w-7xl mx-auto px-6">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "px-5 py-2 rounded-full bg-green-500 text-black font-bold"
                  : "px-5 py-2 rounded-full bg-zinc-900 border border-zinc-700 hover:border-green-500"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="text-4xl font-black text-green-400">
              {totalProjects}
            </h2>
            <p className="mt-2 text-zinc-400">
              Approved Projects
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="text-4xl font-black text-green-400">
              {totalCategories}
            </h2>
            <p className="mt-2 text-zinc-400">
              Categories
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="text-4xl font-black text-green-400">
              {featuredProjects.length}
            </h2>
            <p className="mt-2 text-zinc-400">
              Featured Projects
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="text-4xl font-black text-green-400">
              100%
            </h2>
            <p className="mt-2 text-zinc-400">
              Open Source
            </p>
          </div>

        </div>

        <section id="projects" className="pb-20">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">
              Explore Projects
            </h2>

            <span className="text-zinc-500">
              {filteredProjects.length} Project
              {filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </div>

          {loading ? (
            <LoadingCards />
          ) : filteredProjects.length === 0 ? (
            <div className="border border-dashed border-zinc-700 rounded-2xl py-20 text-center">
              <h3 className="text-2xl font-bold">
                No Projects Found
              </h3>

              <p className="mt-3 text-zinc-500">
                Try another search or category.
              </p>
            </div>
          ) : (
            <>
              {featuredProjects.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-3xl font-bold mb-8">
                    ⭐ Featured Projects
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                      <ProjectCard
                        key={`featured-${project.id}`}
                        project={project}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </>
          )}

        </section>

      </div>

      <Footer />
    </div>
  );
}