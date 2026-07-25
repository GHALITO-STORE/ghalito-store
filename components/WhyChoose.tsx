export default function WhyChoose() {
  const features = [
    {
      title: "Qualité Premium",
      description:
        "Des vêtements sélectionnés avec soin pour offrir confort, durabilité et finitions haut de gamme.",
      icon: "👕",
    },
    {
      title: "Design Exclusif",
      description:
        "Chaque collection est pensée pour refléter un style unique et intemporel.",
      icon: "✨",
    },
    {
      title: "Livraison Internationale",
      description:
        "Nous livrons dans de nombreux pays grâce à nos partenaires logistiques.",
      icon: "🌍",
    },
    {
      title: "Paiement Sécurisé",
      description:
        "Vos paiements sont protégés grâce à des solutions fiables et sécurisées.",
      icon: "🔒",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.6em] text-[#C9A227]">
            GHALITO
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Pourquoi choisir GHALITO ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Plus qu'une marque, GHALITO est une identité. Nous mettons
            l'accent sur la qualité, le design et l'expérience client.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-[#C9A227]/20 bg-[#111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_10px_30px_rgba(201,162,39,0.2)]"
            >
              <div className="mb-6 text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}