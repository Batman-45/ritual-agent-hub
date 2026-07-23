import {
  Globe,
  ExternalLink,
  FileText,
  User,
  Tag,
  Layers,
} from "lucide-react";

export default function ReviewStep({
  form,
  logoPreview,
  bannerPreview,
}) {
  const links = [
    {
      label: "Website",
      value: form.website,
      icon: Globe,
    },
    {
      label: "GitHub",
      value: form.github,
      icon: ExternalLink,
    },
    {
      label: "Documentation",
      value: form.documentation,
      icon: FileText,
    },
    {
      label: "Twitter / X",
      value: form.twitter,
      icon: ExternalLink,
    },
  ];

  return (
    <div className="space-y-10">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Review Your Submission
        </h2>

        <p className="mt-2 text-zinc-400">
          Double-check everything before submitting your project.
        </p>

      </div>

      {/* Banner */}

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

        {bannerPreview ? (
          <img
            src={bannerPreview}
            alt="Banner"
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="flex h-64 items-center justify-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
            <span className="text-zinc-500">
              No banner selected
            </span>
          </div>
        )}

        <div className="p-8">

          <div className="flex items-start gap-6">

            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Logo"
                className="h-24 w-24 rounded-2xl border border-zinc-700 object-cover"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800">
                Logo
              </div>
            )}

            <div className="flex-1">

              <h3 className="text-3xl font-bold text-white">
                {form.name || "Project Name"}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {form.description || "Project description will appear here."}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Info */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="mb-6 text-xl font-semibold">
            Project Details
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <Layers size={18} className="text-emerald-400" />
              <span>{form.category || "-"}</span>
            </div>

            <div className="flex items-center gap-3">
              <Tag size={18} className="text-emerald-400" />
              <span>{form.type || "-"}</span>
            </div>

            <div className="flex items-center gap-3">
              <User size={18} className="text-emerald-400" />
              <span>{form.builder || "-"}</span>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="mb-6 text-xl font-semibold">
            Project Links
          </h3>

          <div className="space-y-4">

            {links.map((link) => {
              const Icon = link.icon;

              return (
                <div
                  key={link.label}
                  className="flex items-center gap-3"
                >
                  <Icon
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="truncate text-zinc-300">
                    {link.value || "-"}
                  </span>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Tags */}

      {form.tags && (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="mb-4 text-xl font-semibold">
            Tags
          </h3>

          <div className="flex flex-wrap gap-3">

            {form.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400"
                >
                  {tag}
                </span>
              ))}

          </div>

        </div>
      )}

      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">

        <p className="text-sm leading-7 text-zinc-300">
          When you click <strong>Submit Project</strong>, your submission
          will be uploaded to Supabase and marked as <strong>Pending</strong>
          for review.
        </p>

      </div>

    </div>
  );
}