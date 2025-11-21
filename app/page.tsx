import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Timetable from "@/components/Timetable";
import Memberships from "@/components/Memberships";
import Coach from "@/components/Coach";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Timetable />
      <Memberships />
      <Coach />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
