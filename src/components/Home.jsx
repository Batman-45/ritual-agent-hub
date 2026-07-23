import { useEffect, useMemo, useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import FeaturedProjects from "./FeaturedProjects";
import TrendingSection from "./TrendingSection";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";

import { supabase } from "../services/supabase";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);

    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setProjects(data || []);
    }

    setLoading(false);
  }

  const filteredProjects = useMemo(() => {
    let list = [...projects];

    if (search.trim()) {
      const q = search.toLowerCase();

      list = list.filter((project) => {
        return (
          project.name?.toLowerCase().includes(q) ||
          project.description?.toLowerCase().includes(q) ||
          project.category?.toLowerCase().includes(q)
        );
      });
    }

    if (category !== "All") {
      list = list.filter(
        (project) => project.category === category
      );
    }

    return list;
  }, [projects, search, category]);

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      <Hero />

      <main className="mx-auto max-w-7xl px-6">

        <div className="py-12">
          <SearchBar
            value={search}
            onChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
          />
        </div>

        <Categories
          selected={category}
          onSelect={setCategory}
        />

        <FeaturedProjects
          projects={projects}
        />

        <TrendingSection
          projects={projects}
        />

        <section id="projects" className="my-20">

          <div className="mb-10 flex items-center justify-between">

            <div>
              <h2 className="text-4xl font-bold">
                Explore All Projects
              </h2>

              <p className="mt-3 text-zinc-400">
                Browse every project in the Ritual ecosystem.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
              {filteredProjects.length} Projects
            </div>

          </div>

          {loading ? (

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-80 animate-pulse rounded-3xl bg-zinc-900"
                />
              ))}

            </div>

          ) : filteredProjects.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-zinc-700 py-24 text-center">

              <h3 className="text-3xl font-bold">
                No Projects Found
              </h3>

              <p className="mt-4 text-zinc-500">
                Try another search or category.
              </p>

            </div>

          ) : (

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}

            </div>

          )}

        </section>

      </main>

      <Footer />

    </div>
  );
}