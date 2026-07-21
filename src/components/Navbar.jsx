import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-black text-green-400"
        >
          Ritual Hub
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-zinc-300 hover:text-green-400"
          >
            Home
          </Link>

          <Link
            to="/submit"
            className="text-zinc-300 hover:text-green-400"
          >
            Submit
          </Link>

          <Link
            to="/login"
            className="rounded-xl bg-green-500 px-4 py-2 font-semibold text-black hover:bg-green-400"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}