import { Link } from "react-router-dom";
import logo from "../assets/ritual-logo.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Green Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-green-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">

        <img
          src={logo}
          alt="Ritual"
          className="w-24 h-24 mx-auto rounded-2xl shadow-xl shadow-green-500/30"
        />

        <div className="mt-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400">
          ⚡ Built on Ritual
        </div>

        <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">
          Discover the
          <br />
          <span className="text-green-400">
            Ritual Ecosystem
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-zinc-400">
          Explore AI Agents, Infrastructure, Developer Tools,
          Research Projects and dApps built on Ritual.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="#projects"
            className="rounded-xl bg-green-500 px-7 py-4 font-bold text-black hover:bg-green-400"
          >
            Explore Projects
          </a>

          <Link
            to="/submit"
            className="rounded-xl border border-zinc-700 px-7 py-4 hover:border-green-500 hover:text-green-400"
          >
            Submit Project
          </Link>

        </div>

      </div>
    </section>
  );
}