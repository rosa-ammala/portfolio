import AboutExperienceSection from "@/components/AboutExperienceSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsBook from "@/components/ProjectsBook";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about">
        <AboutExperienceSection />
      </section>
      <section id="projects" className="py-24 flex justify-center">
        <ProjectsBook />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
