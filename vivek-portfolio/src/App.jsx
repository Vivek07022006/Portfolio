import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import InspectGuard from "./components/InspectGuard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-black dark:text-white">
      <InspectGuard />
      <Navbar />

      {/* spacing for fixed navbar */}
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Leadership />
        <Contact />
      </div>
    </div>
  );
}
