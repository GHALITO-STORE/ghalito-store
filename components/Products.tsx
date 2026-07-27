"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  thumbnail_url: string;
  variants: number;
  price: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Tous");

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/printful", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Erreur API");
        }

        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (category === "Tous") return products;

    return products.filter((product) => {
      const name = product.name.toLowerCase();

      switch (category) {
        case "T-Shirts":
          return (
            name.includes("tee") ||
            name.includes("t-shirt")
          );

        case "Hoodies":
          return (
            name.includes("hoodie") ||
            name.includes("sweatshirt")
          );

        case "Sacs":
          return (
            name.includes("bag") ||
            name.includes("tote") ||
            name.includes("duffle")
          );

        case "Coques":
          return (
            name.includes("case") ||
            name.includes("iphone")
          );

        default:
          return true;
      }
    });
  }, [products, category]);

  if (loading) {
    return (
      <section className="py-24 text-center text-white text-2xl">
        Chargement des produits...
      </section>
    );
  }

  return (
    <section className="bg-[#0B0B0B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-5xl font-black text-white">
          Nos Produits
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {["Tous", "T-Shirts", "Hoodies", "Sacs", "Coques"].map((cat) => (

            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                category === cat
                  ? "bg-[#C9A227] text-black font-bold"
                  : "border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => {

            const name = product.name.toLowerCase();

            let badge = "Produit";

            if (name.includes("tee") || name.includes("t-shirt"))
              badge = "T-Shirt";

            else if (
              name.includes("hoodie") ||
              name.includes("sweatshirt")
            )
              badge = "Hoodie";

            else if (
              name.includes("bag") ||
              name.includes("tote") ||
              name.includes("duffle")
            )
              badge = "Sac";

            else if (
              name.includes("case") ||
              name.includes("iphone")
            )
              badge = "Coque";
                          return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border border-[#C9A227]/20 bg-gradient-to-b from-[#181818] to-[#0B0B0B] transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A227] hover:shadow-[0_0_45px_rgba(201,162,39,0.30)]"
              >
                <div className="absolute left-5 top-5 z-20 rounded-full bg-[#C9A227] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  {badge}
                </div>

                <div className="overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={product.thumbnail_url}
                    alt={product.name}
                    className="h-80 w-full object-contain p-8 transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-4 p-6">

                  <h3 className="min-h-[60px] text-xl font-bold text-white">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">

                    <span className="text-2xl font-black text-[#C9A227]">
                      {Number(product.price).toFixed(2)} €
                    </span>

                    <span className="rounded-full border border-[#C9A227]/30 px-3 py-1 text-xs uppercase tracking-wider text-[#C9A227]">
                      Premium
                    </span>

                  </div>

                  <p className="text-sm text-gray-400">
                    {product.variants} variantes disponibles
                  </p>

                  <button className="w-full rounded-full bg-[#C9A227] py-3 font-bold uppercase tracking-widest text-black transition duration-300 hover:scale-105 hover:bg-[#E5C158]">
                    Voir le produit
                  </button>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}