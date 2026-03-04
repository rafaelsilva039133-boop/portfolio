import About from "@/components/about";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Plans from "@/components/plans";

export default function Home() {
 
  return (
    <main>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Services/>
      <Plans/>
      <Contact/>
    </main>
  );
}
