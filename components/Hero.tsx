import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0B0B] px-6 pt-24 text-center">

      {/* Fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0B0B] to-black" />

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl">

        <span className="mb-6 block text-sm uppercase tracking-[0.7em] text-[#C9A227]">
          Luxury Print On Demand
        </span>

        <h1 className="text-6xl font-black tracking-[0.4rem] text-white md:text-8xl">
          GHALITO
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
          Découvrez une collection exclusive de vêtements premium conçus
          pour celles et ceux qui recherchent un style moderne,
          minimaliste et élégant.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <button className="rounded-full bg-[#C9A227] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
            Découvrir
          </button>

          <button className="rounded-full border border-[#C9A227] px-10 py-4 text-white transition-all duration-300 hover:bg-[#C9A227] hover:text-black">
            Boutique
          </button>

        </div>

      </div>

      {/* Image */}
      <div className="relative z-10 mt-16 h-[500px] w-full max-w-6xl overflow-hidden rounded-2xl border border-[#C9A227]/20 shadow-2xl">

        <Image
          src="/images/hero.png"
          alt="GHALITO Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

      </div>

    </section>
  );
}