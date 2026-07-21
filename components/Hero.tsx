export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center pt-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0B0B] to-black" />

      {/* Content */}
      <div className="relative z-10">

        <span className="mb-6 block text-sm uppercase tracking-[0.7em] text-[#C9A227]">
          Luxury Print On Demand
        </span>

        <h1 className="text-7xl font-black md:text-9xl tracking-widest">
          GHALITO
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
          Découvrez une collection exclusive de vêtements premium conçus
          pour ceux qui recherchent un style moderne, minimaliste et élégant.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <button className="rounded-full bg-[#C9A227] px-10 py-4 font-semibold text-black transition hover:scale-105">
            Découvrir la collection
          </button>

          <button className="rounded-full border border-[#C9A227] px-10 py-4 text-white transition hover:bg-[#C9A227] hover:text-black">
            Nos produits
          </button>

        </div>

        <div className="mt-12 w-full max-w-7xl h-[500px]">
          <img
            src="/images/hero.png"
            alt="Ghalito"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

      </div>

    </section>
  );
}