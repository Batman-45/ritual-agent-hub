import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import Navbar from "../components/Navbar";

export default function SubmitAgent() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [logoFile, setLogoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);

  const [logoPreview, setLogoPreview] = useState("");
  const [bannerPreview, setBannerPreview] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    type: "dApp",
    website: "",
    github: "",
    documentation: "",
    twitter: "",
    builder: "",
    tags: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogo(e) {
    const file = e.target.files[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  }

  function handleBanner(e) {
    const file = e.target.files[0];

    if (!file) return;

    setBannerFile(file);
    setBannerPreview(URL.createObjectURL(file));
  }

  async function uploadImage(file) {
    if (!file) return "";

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("project-images")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const logo = await uploadImage(logoFile);
      const image = await uploadImage(bannerFile);

      const { error } = await supabase
        .from("Projects")
        .insert([
          {
            ...form,
            logo,
            image,
            status: "pending",
            verified: false,
            featured: false,
          },
        ]);

      if (error) throw error;

      alert("Project submitted successfully!");

      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black mb-2">
          Submit Project
        </h1>

        <p className="text-zinc-400 mb-10">
          Submit your Ritual project for community review.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Project Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              rows={5}
              required
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
              >
                <option>dApp</option>
                <option>AI Agent</option>
                <option>Tool</option>
                <option>SDK</option>
                <option>Infrastructure</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Builder
            </label>

            <input
              type="text"
              name="builder"
              value={form.builder}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Website
            </label>

            <input
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              GitHub
            </label>

            <input
              type="url"
              name="github"
              value={form.github}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Documentation
            </label>

            <input
              type="url"
              name="documentation"
              value={form.documentation}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Twitter / X
            </label>

            <input
              type="url"
              name="twitter"
              value={form.twitter}
              onChange={handleChange}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Tags
            </label>

            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="AI, ONNX, DeFi"
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Logo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleLogo}
              className="w-full"
            />

            {logoPreview && (
              <img
                src={logoPreview}
                alt="Logo Preview"
                className="mt-4 w-32 h-32 rounded-xl object-cover border border-zinc-700"
              />
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Banner Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleBanner}
              className="w-full"
            />

            {bannerPreview && (
              <img
                src={bannerPreview}
                alt="Banner Preview"
                className="mt-4 rounded-xl border border-zinc-700"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-500 text-black py-4 font-bold hover:bg-green-400 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Submit Project"}
          </button>

        </form>

      </div>
    </div>
  );
}