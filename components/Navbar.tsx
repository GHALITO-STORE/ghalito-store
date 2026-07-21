export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/90 backdrop-blur border-b border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        <h1 className="text-2xl font-bold tracking-[8px] text-[#C9A227]">
          GHALITO
        </h1>

        <nav className="hidden md:flex gap-10 text-white">

          <a href="#">Accueil</a>

          <a href="#">Boutique</a>

          <a href="#">Collections</a>

          <a href="#">Contact</a>

        </nav>

        <button className="border border-[#C9A227] px-6 py-2 rounded-full hover:bg-[#C9A227] hover:text-black transition">
          Panier
        </button>

      </div>
    </header>
  );
}