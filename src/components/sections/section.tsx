import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Section({
    id,
    title,
    className,
    children,
}: Readonly<{
    id: string;
    title: string;
    className?: string;
    children: ReactNode;
}>) {
    return (
        <section id={id} className={cn("scroll-mt-20 py-14", className)}>
            <Reveal>
                <h2 className="mb-8 font-mono text-xl uppercase tracking-[0.2em] text-muted-foreground">
                    {title}
                </h2>
            </Reveal>
            {children}
        </section>
    );
}
