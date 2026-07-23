import UploadCard from "./UploadCard";

export default function MediaStep({
  logoPreview,
  bannerPreview,
  handleLogo,
  handleBanner,
}) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Upload Media
        </h2>

        <p className="mt-2 text-zinc-400">
          Add your project branding. A logo and banner make your listing
          stand out in the Ritual ecosystem.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <UploadCard
          title="Project Logo"
          description="Square image (512×512 recommended)"
          preview={logoPreview}
          onChange={handleLogo}
        />

        <UploadCard
          title="Banner Image"
          description="16:9 cover image (recommended)"
          preview={bannerPreview}
          onChange={handleBanner}
        />

      </div>

      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

        <h3 className="font-semibold text-emerald-400">
          Recommended
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-zinc-400">
          <li>• Use a high-resolution logo with a transparent background.</li>
          <li>• Choose a banner that represents your project visually.</li>
          <li>• Avoid text-heavy images.</li>
          <li>• JPG, PNG and WEBP are supported.</li>
        </ul>

      </div>

    </div>
  );
}