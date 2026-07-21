import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0B0B] text-white">
        <Hero />
        <Collections />
      </main>
    </>
  );
}
