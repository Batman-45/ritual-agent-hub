import {
  Globe,
  FileText,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export default function LinksStep({
  form,
  handleChange,
}) {
  const fields = [
    {
      label: "Website",
      name: "website",
      placeholder: "https://yourproject.com",
      icon: Globe,
    },
    {
      label: "GitHub",
      name: "github",
      placeholder: "https://github.com/...",
      icon: ExternalLink,
    },
    {
      label: "Documentation",
      name: "documentation",
      placeholder: "https://docs.yourproject.com",
      icon: FileText,
    },
    {
      label: "Twitter / X",
      name: "twitter",
      placeholder: "https://x.com/...",
      icon: ExternalLink,
    },
    {
      label: "Discord",
      name: "discord",
      placeholder: "https://discord.gg/...",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Project Links
        </h2>

        <p className="mt-2 text-zinc-400">
          Help users discover and learn more about your project.
        </p>
      </div>

      <div className="space-y-6">

        {fields.map((field) => {
          const Icon = field.icon;

          return (
            <div key={field.name}>

              <label className="mb-2 block text-sm font-semibold text-zinc-300">
                {field.label}
              </label>

              <div className="flex items-center rounded-2xl border border-zinc-700 bg-zinc-900 transition focus-within:border-emerald-400">

                <div className="px-4 text-zinc-500">
                  <Icon size={20} />
                </div>

                <input
                  type="url"
                  name={field.name}
                  value={form[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent px-2 py-4 text-white outline-none"
                />

              </div>

            </div>
          );
        })}

      </div>

      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">

        <h3 className="font-semibold text-emerald-400">
          Tip
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Adding your website, documentation, repository and community
          links helps builders and users evaluate your project more easily.
        </p>

      </div>

    </div>
  );
}