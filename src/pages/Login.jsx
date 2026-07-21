import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/admin");
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
      >

        <h1 className="text-4xl font-black text-white mb-2">
          Admin Login
        </h1>

        <p className="text-zinc-400 mb-8">
          Sign in to manage Ritual Agent Hub.
        </p>

        {error && (
          <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-red-400">
            {error}
          </div>
        )}

        <div className="mb-5">
          <label className="block text-white mb-2">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white focus:border-green-500 outline-none"
          />
        </div>

        <div className="mb-8">
          <label className="block text-white mb-2">
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white focus:border-green-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-500 text-black py-3 font-bold hover:bg-green-400 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

      </form>

    </div>
  );
}