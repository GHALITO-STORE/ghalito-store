import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0B0B] text-white">
        <Hero />
        <Products />
        <FeaturedProducts />
        <WhyChoose />
      </main>
    </>
  );
}