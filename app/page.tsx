import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Labs from "@/components/ui/Labs";
import Methodology from "@/components/ui/Methodology";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* seções */}
        <Hero />
        <Labs />
        <Methodology />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
