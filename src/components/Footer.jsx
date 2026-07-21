import logo from "../assets/ritual-logo.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Ritual"
                className="w-12 h-12 rounded-xl"
              />

              <div>

                <h2 className="text-xl font-bold">
                  Ritual Hub
                </h2>

                <p className="text-zinc-400">
                  Discover the Ritual ecosystem.
                </p>

              </div>

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Resources
            </h3>

            <div className="space-y-2">

              <a
                href="https://ritual.foundation"
                target="_blank"
                rel="noreferrer"
                className="block text-zinc-400 hover:text-green-400"
              >
                Ritual Foundation
              </a>

              <a
                href="https://docs.ritual.foundation"
                target="_blank"
                rel="noreferrer"
                className="block text-zinc-400 hover:text-green-400"
              >
                Documentation
              </a>

              <a
                href="https://discord.gg/ritual"
                target="_blank"
                rel="noreferrer"
                className="block text-zinc-400 hover:text-green-400"
              >
                Discord
              </a>

              <a
                href="https://x.com/ritualnet"
                target="_blank"
                rel="noreferrer"
                className="block text-zinc-400 hover:text-green-400"
              >
                X (Twitter)
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-8 text-center text-zinc-500">

          Built with ❤️ for the Ritual community.

        </div>

      </div>
    </footer>
  );
}