import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProgressStepper from "../components/submit/ProgressStepper";
import BasicInfoStep from "../components/submit/BasicInfoStep";
import LinksStep from "../components/submit/LinksStep";
import MediaStep from "../components/submit/MediaStep";
import ReviewStep from "../components/submit/ReviewStep";

import { supabase } from "../services/supabase";

export default function SubmitAgent() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
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
    builder: "",
    website: "",
    github: "",
    documentation: "",
    twitter: "",
    discord: "",
    tags: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogo(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  }

  function handleBanner(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    setBannerFile(file);
    setBannerPreview(URL.createObjectURL(file));
  }

  async function uploadImage(file) {
    if (!file) return "";

    const filename = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("project-images")
      .upload(filename, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(filename);

    return data.publicUrl;
  }

  async function handleSubmit() {
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
            featured: false,
            verified: false,
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

  function nextStep() {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16">

        <div className="mb-10">

          <h1 className="text-5xl font-black">
            Submit Your Project
          </h1>

          <p className="mt-3 text-zinc-400">
            Showcase your project in the Ritual ecosystem directory.
          </p>

        </div>

        <ProgressStepper currentStep={step} />

        <div className="rounded-[32px] border border-zinc-800 bg-zinc-900 p-8">

          {step === 1 && (
            <BasicInfoStep
              form={form}
              handleChange={handleChange}
            />
          )}

          {step === 2 && (
            <LinksStep
              form={form}
              handleChange={handleChange}
            />
          )}

          {step === 3 && (
            <MediaStep
              logoPreview={logoPreview}
              bannerPreview={bannerPreview}
              handleLogo={handleLogo}
              handleBanner={handleBanner}
            />
          )}

          {step === 4 && (
            <ReviewStep
              form={form}
              logoPreview={logoPreview}
              bannerPreview={bannerPreview}
            />
          )}
                    <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">

            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <div className="flex gap-4">

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-2xl bg-emerald-500 px-8 py-3 font-semibold text-black transition hover:bg-emerald-400"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="rounded-2xl bg-emerald-500 px-8 py-3 font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Project"}
                </button>
              )}

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}