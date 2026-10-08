import { Header } from "@/components/header";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Projects } from "@/components/sections/projects";
import { Section } from "@/components/sections/section";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { profile } from "@/data/resume";

export default function Home() {
    return (
        <>
            <Header />
            <main className="mx-auto w-full max-w-3xl flex-1 px-6">
                <Hero />
                <div className="py-6">
                    <Stats />
                </div>
                <Section id="experience" title="Experience">
                    <Experience />
                </Section>
                <Section id="projects" title="Projects">
                    <Projects />
                </Section>
                <Section id="skills" title="Skills">
                    <Skills />
                </Section>
                <Section id="highlights" title="Highlights">
                    <Highlights />
                </Section>
                <Section id="contact" title="Contact">
                    <Contact />
                </Section>
            </main>
            <footer className="mx-auto w-full max-w-3xl px-6 py-10 text-xs text-muted-foreground">
                {profile.name} · Built with Next.js, shadcn/ui and Motion
            </footer>
        </>
    );
}
