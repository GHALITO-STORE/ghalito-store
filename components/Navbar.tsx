export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="#" className="group">
          <h1 className="text-2xl font-extrabold tracking-[0.5rem] text-[#C9A227] transition duration-300 group-hover:tracking-[0.65rem]">
            GHALITO
          </h1>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
          {["Accueil", "Boutique", "Collections", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-200 transition hover:text-[#C9A227]"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C9A227] transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Bouton */}
        <button className="rounded-full border border-[#C9A227] px-6 py-2 text-sm font-semibold text-[#C9A227] transition duration-300 hover:bg-[#C9A227] hover:text-black">
          Panier
        </button>

      </div>
    </header>
  );
}