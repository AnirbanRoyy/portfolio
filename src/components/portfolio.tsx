import { ScrollToSection } from "@/components/scroll-to-section";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Projects } from "@/components/sections/projects";
import { Section } from "@/components/sections/section";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import type { ViewId } from "@/data/tabs";

// Phones (below sm) always get every section, as one long page.
// From sm up, only the active view is shown, so each route reads as its own page.
export function Portfolio({ view }: Readonly<{ view: ViewId }>) {
    const show = (id: ViewId) => (view === id ? undefined : "sm:hidden");

    return (
        <main className="mx-auto w-full max-w-3xl flex-1 px-6">
            {view !== "home" && <ScrollToSection id={view} />}
            <div className={show("home")}>
                <Hero />
                <div className="py-6">
                    <Stats />
                </div>
            </div>
            <Section
                id="experience"
                title="Experience"
                className={show("experience")}
            >
                <Experience />
            </Section>
            <Section
                id="projects"
                title="Projects"
                className={show("projects")}
            >
                <Projects />
            </Section>
            <Section id="skills" title="Skills" className={show("skills")}>
                <Skills />
            </Section>
            <Section
                id="highlights"
                title="Highlights"
                className={show("highlights")}
            >
                <Highlights />
            </Section>
            <Section id="contact" title="Contact" className={show("contact")}>
                <Contact />
            </Section>
        </main>
    );
}
