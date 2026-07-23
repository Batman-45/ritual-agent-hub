import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Boxes,
  Cpu,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      icon: Boxes,
      value: "150+",
      label: "Projects",
    },
    {
      icon: Bot,
      value: "300+",
      label: "AI Agents",
    },
    {
      icon: Cpu,
      value: "24/7",
      label: "Community",
    },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[#09090B]" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />

        <div className="absolute right-0 top-32 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="flex min-h-[85vh] flex-col items-center justify-center text-center">

          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400">

            <Sparkles size={16} />

            Ritual Ecosystem Directory

          </div>

          {/* Heading */}

          <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl xl:text-8xl">

            Discover the

            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">

              Future of AI

            </span>

            on Ritual

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">

            Explore innovative AI agents, decentralized applications,
            developer tools, and infrastructure powering the Ritual ecosystem.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              to="/submit"
              className="rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
            >
              Submit Project
            </Link>

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-white transition hover:border-emerald-500 hover:bg-zinc-800"
            >
              Browse Projects

              <ArrowRight size={18} />

            </a>

          </div>

          {/* Stats */}

          <div className="mt-20 grid w-full gap-6 md:grid-cols-3">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
                >

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">

                    <Icon
                      size={28}
                      className="text-emerald-400"
                    />

                  </div>

                  <h2 className="text-4xl font-bold text-white">

                    {item.value}

                  </h2>

                  <p className="mt-3 text-zinc-500">

                    {item.label}

                  </p>

                </div>

              );

            })}

          </div>

          {/* Scroll */}

          <div className="mt-20 animate-bounce">

            <ChevronDown
              size={34}
              className="text-zinc-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}