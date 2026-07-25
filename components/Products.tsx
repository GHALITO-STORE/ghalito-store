"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  thumbnail_url: string;
  variants: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

        console.log("Produits :", data);

        console.log("Type :", typeof data);
console.log("Est un tableau :", Array.isArray(data));
console.log(data);

setProducts(data);
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

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

        <h2 className="mb-14 text-center text-5xl font-black text-white">
          Nos Produits
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
           <div
  key={product.id}
  className="group overflow-hidden rounded-3xl border border-[#C9A227]/20 bg-[#111] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_0_40px_rgba(201,162,39,0.25)]"
>

  <div className="flex h-80 items-center justify-center bg-[#F5F5F5] p-8">

    <img
      src={product.thumbnail_url}
      alt={product.name}
      className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
    />

  </div>

  <div className="p-6">

    <h3 className="text-xl font-bold text-white">
      {product.name}
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      {product.variants} variantes disponibles
    </p>

    <button className="mt-6 w-full rounded-full border border-[#C9A227] py-3 font-semibold text-[#C9A227] transition hover:bg-[#C9A227] hover:text-black">
      Voir le produit
    </button>

  </div>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}