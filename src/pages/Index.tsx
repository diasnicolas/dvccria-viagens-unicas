import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import TravelWidget from "@/components/TravelWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <Services />
      <TravelWidget />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
