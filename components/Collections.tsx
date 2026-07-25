import Image from "next/image";

export default function Collections() {
  const collections = [
    {
      title: "Faith",
      description: "Only God Can Judge Me",
      image: "/images/collections/faith.png",
    },
    {
      title: "Tiger",
      description: "Force & Courage",
      image: "/images/collections/tiger.webp",
    },
    {
      title: "Sacred",
      description: "Tree of Life",
      image: "/images/collections/sacred.webp",
    },
    {
      title: "Hope",
      description: "Wings Collection",
      image: "/images/collections/hope.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-28">

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#C9A227] blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white blur-[220px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Titre */}
        <div className="mb-20 text-center">

          <span className="text-sm uppercase tracking-[0.6em] text-[#C9A227]">
            GHALITO
          </span>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Collections Premium
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Chaque collection possède sa propre identité. Trouvez celle
            qui correspond à votre personnalité.
          </p>

        </div>

        {/* Cartes */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {collections.map((item) => (

            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-[#C9A227]/20 bg-[#111111] transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A227] hover:shadow-[0_20px_50px_rgba(201,162,39,0.25)]"
            >

              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute right-4 top-4 rounded-full border border-[#C9A227] bg-black/70 px-4 py-1 text-xs uppercase tracking-widest text-[#C9A227] backdrop-blur">
                  Premium
                </div>

              </div>

              {/* Texte */}
              <div className="p-7">

                <h3 className="text-2xl font-bold transition duration-300 group-hover:text-[#C9A227]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.description}
                </p>

                <button className="mt-8 rounded-full border border-[#C9A227] px-7 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#C9A227] hover:text-black hover:shadow-[0_0_20px_rgba(201,162,39,0.5)]">
                  Découvrir →
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}