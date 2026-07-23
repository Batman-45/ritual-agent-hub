import { Upload, Image as ImageIcon, X } from "lucide-react";

export default function UploadCard({
  title,
  description,
  preview,
  onChange,
  accept = "image/*",
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-emerald-500">

      <div className="mb-5">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-zinc-400">
          {description}
        </p>
      </div>

      {preview ? (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-700">

          <img
            src={preview}
            alt={title}
            className="h-56 w-full object-cover"
          />

          <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/60 opacity-0 transition hover:opacity-100">

            <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur">
              <Upload className="mx-auto mb-2" size={20} />
              Change Image
            </div>

            <input
              hidden
              type="file"
              accept={accept}
              onChange={onChange}
            />

          </label>

        </div>
      ) : (
        <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-700 transition hover:border-emerald-400 hover:bg-zinc-800/50">

          <ImageIcon
            size={42}
            className="mb-4 text-zinc-500"
          />

          <p className="font-medium text-white">
            Click to upload
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            PNG, JPG, WEBP
          </p>

          <input
            hidden
            type="file"
            accept={accept}
            onChange={onChange}
          />

        </label>
      )}

    </div>
  );
}