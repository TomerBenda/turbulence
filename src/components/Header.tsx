export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/100 to-transparent">
        <h1 className="text-3xl font-bold tracking-wide">🌪️🌐 Turbulence</h1>
        <span className="font-mono font-bold text-green-400">The internet has weather, see where it's storming</span>
        <div className="flex gap-4 text-sm font-mono text-white text-opaciry-75">
          <span className="hover:text-white transition">Live</span>
          <span className="hover:text-white transition">Regions</span>
          <span className="hover:text-white transition">About</span>
        </div>
      </header>
  );
}

