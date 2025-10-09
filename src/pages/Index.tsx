import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
