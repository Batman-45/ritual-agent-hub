import { Link } from "react-router-dom";
import { ArrowRight, Rocket, FolderKanban, Users, Layers } from "lucide-react";
import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
import logo from "../assets/ritual-logo.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[150px]" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-green-500/5 blur-[120px]" />

        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <img
            src={logo}
            alt="Ritual"
            className="mx-auto h-24 w-24 rounded-3xl shadow-2xl shadow-green-500/30"
          />

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-green-400">

            <Rocket size={18} />

            Built on Ritual

          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

            Discover

            <span className="block text-green-400">

              185+ dApps

            </span>

            Built on Ritual

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">

            Explore AI Agents, Infrastructure, Wallets, DeFi,
            Gaming and Developer Tools built by the Ritual community.

          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-green-400"
            >
              Explore dApps
              <ArrowRight size={18} />
            </a>

            <Link
              to="/submit"
              className="rounded-2xl border border-zinc-700 px-8 py-4 font-bold text-white transition hover:border-green-500 hover:text-green-400"
            >
              Submit dApp
            </Link>

          </div>

        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatsCard
            icon={<FolderKanban size={30} />}
            value="185+"
            label="Ritual dApps"
          />

          <StatsCard
            icon={<Layers size={30} />}
            value="20+"
            label="Categories"
          />

          <StatsCard
            icon={<Users size={30} />}
            value="Growing"
            label="Builder Community"
          />

          <StatsCard
            icon={<Rocket size={30} />}
            value="Open"
            label="Community Driven"
          />

        </div>

      </div>

    </section>
  );
}