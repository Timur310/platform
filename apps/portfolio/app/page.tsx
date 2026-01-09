import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white antialiased px-6">
      {/* Noise overlay */}
      <div aria-hidden className="noise" />
      <div className="relative z-10 fade-up">
        {/* Hero */}
        <Hero />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Bottom Statement */}
        <Footer />
      </div>
    </main>
  );
}
