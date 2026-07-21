export default function LoadingCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden animate-pulse"
        >
          <div className="h-52 bg-zinc-800"></div>

          <div className="p-6">

            <div className="h-7 w-3/4 bg-zinc-800 rounded mb-4"></div>

            <div className="h-4 bg-zinc-800 rounded mb-2"></div>
            <div className="h-4 bg-zinc-800 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-zinc-800 rounded"></div>

            <div className="flex gap-2 mt-6">
              <div className="h-8 w-20 bg-zinc-800 rounded-full"></div>
              <div className="h-8 w-24 bg-zinc-800 rounded-full"></div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}