export default function BasicInfoStep({
  form,
  handleChange,
}) {
  const categories = [
    "AI",
    "Infrastructure",
    "DeFi",
    "Gaming",
    "Social",
    "Developer Tool",
    "Data",
    "Marketplace",
  ];

  const types = [
    "dApp",
    "AI Agent",
    "SDK",
    "Infrastructure",
    "Tool",
  ];

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Basic Information
        </h2>

        <p className="mt-2 text-zinc-400">
          Tell the community about your Ritual project.
        </p>
      </div>

      <div className="grid gap-6">

        {/* Project Name */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Project Name *
          </label>

          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Siggy Studio"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Description *
          </label>

          <textarea
            rows={6}
            required
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe what your project does..."
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        {/* Category + Type */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-emerald-400"
            >
              <option value="">Select category</option>

              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Type
            </label>

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-emerald-400"
            >
              {types.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Builder */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Builder
          </label>

          <input
            type="text"
            name="builder"
            value={form.builder}
            onChange={handleChange}
            placeholder="Your name or organization"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        {/* Tags */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Tags
          </label>

          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="AI, DeFi, ONNX, Agents"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-emerald-400"
          />

          <p className="mt-2 text-xs text-zinc-500">
            Separate tags with commas.
          </p>
        </div>

      </div>
    </div>
  );
}