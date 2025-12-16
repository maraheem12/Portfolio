import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Contributions from "@/components/main/Contributions";
import Certifications from "@/components/main/Certifications";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Contributions />
        <Certifications />
        <Projects />
      </div>
    </main>
  );
}
