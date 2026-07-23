import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  Plus,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Explore",
      href: "/",
    },
    {
      name: "Projects",
      href: "/#projects",
    },
    {
      name: "Agents",
      href: "/#agents",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/30">
            <Sparkles className="text-black" size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Ritual Directory
            </h1>

            <p className="text-xs text-zinc-500">
              Discover AI Projects
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 md:flex">

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:border-emerald-500"
          >
            <Search size={18} />
          </button>

          <Link
            to="/submit"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            <Plus size={18} />
            Submit Project
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-zinc-800 bg-[#09090B] md:hidden">

          <div className="space-y-2 p-6">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/submit"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 py-3 font-semibold text-black"
            >
              <Plus size={18} />
              Submit Project
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}