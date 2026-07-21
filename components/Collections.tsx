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
    <section className="relative overflow-hidden bg-[#0B0B0B] py-24">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-[#C9A227] blur-[180px]" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm uppercase tracking-[0.5em] text-[#C9A227]">
            GHALITO
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Collections Populaires
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Chaque collection raconte une histoire. Choisissez celle qui
            représente le mieux votre personnalité.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {collections.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-[#C9A227]/20 bg-[#111] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_0_40px_rgba(201,162,39,0.3)]"
            >

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute right-5 top-5 rounded-full border border-[#C9A227] bg-black/60 px-4 py-1 text-xs uppercase tracking-widest text-[#C9A227] backdrop-blur">
                  Premium
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.description}
                </p>

                <button className="mt-8 rounded-full border border-[#C9A227] px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:translate-x-2 hover:bg-[#C9A227] hover:text-black">
                  Découvrir →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}