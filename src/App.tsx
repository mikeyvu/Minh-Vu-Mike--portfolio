import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
    return (
        <main className="bg-[#080818] overflow-x-hidden">
            <Nav />
            <ScrollToTop />
            <section id="hero">
                <Hero />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}