import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Faith Oversize Tee",
      price: "39.99 €",
      image: "/images/collections/faith.png",
      badge: "Best Seller",
    },
    {
      name: "Tiger Premium Hoodie",
      price: "69.99 €",
      image: "/images/collections/tiger.webp",
      badge: "New",
    },
    {
      name: "Sacred Sweatshirt",
      price: "59.99 €",
      image: "/images/collections/sacred.webp",
      badge: "Limited",
    },
    {
      name: "Hope Oversize Tee",
      price: "39.99 €",
      image: "/images/collections/hope.png",
      badge: "Popular",
    },
  ];

  return (
    <section className="bg-[#080808] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="uppercase tracking-[0.6em] text-[#C9A227] text-sm">
            GHALITO
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Produits Vedettes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Découvrez nos créations les plus appréciées.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (

            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-[#C9A227]/20 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_15px_40px_rgba(201,162,39,0.3)]"
            >

              <div className="relative h-[360px]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#C9A227] px-4 py-1 text-xs font-bold text-black">
                  {product.badge}
                </div>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-black text-[#C9A227]">
                  {product.price}
                </p>

                <button className="mt-8 w-full rounded-full bg-[#C9A227] py-3 font-semibold text-black transition duration-300 hover:scale-105">
                  Ajouter au panier
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}