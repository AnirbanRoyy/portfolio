import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
    id,
    title,
    children,
}: Readonly<{
    id: string;
    title: string;
    children: ReactNode;
}>) {
    return (
        <section id={id} className="scroll-mt-20 py-14">
            <Reveal>
                <h2 className="mb-8 font-mono text-xl uppercase tracking-[0.2em] text-muted-foreground">
                    {title}
                </h2>
            </Reveal>
            {children}
        </section>
    );
}
