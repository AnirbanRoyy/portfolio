"use client";

import { motion, useReducedMotion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin01Icon, Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/resume";

export function Hero() {
    const reduce = useReducedMotion();
    const item = (i: number) => ({
        initial: reduce ? false : { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: 0.6,
            delay: 0.1 * i,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    });

    return (
        <section id="top" className="pt-20 pb-10 sm:pt-28">
            <motion.p
                {...item(0)}
                className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
            >
                <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to Software / Full Stack roles
            </motion.p>
            <motion.h1
                {...item(1)}
                className="text-4xl font-semibold tracking-tight sm:text-6xl"
            >
                {profile.name}
            </motion.h1>
            <motion.p
                {...item(2)}
                className="mt-3 text-lg text-muted-foreground sm:text-xl"
            >
                {profile.role}
            </motion.p>
            <motion.p
                {...item(3)}
                className="mt-6 max-w-xl leading-relaxed text-foreground/80"
            >
                {profile.summary}
            </motion.p>
            <motion.div
                {...item(4)}
                className="mt-8 flex flex-wrap items-center gap-3"
            >
                <a
                    className={buttonVariants()}
                    href={`mailto:${profile.email}`}
                >
                    <HugeiconsIcon icon={Mail01Icon} /> Get in touch
                </a>
                <a
                    className={buttonVariants({ variant: "outline" })}
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <HugeiconsIcon icon={GithubIcon} /> GitHub
                </a>
                <a
                    className={buttonVariants({ variant: "outline" })}
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <HugeiconsIcon icon={Linkedin01Icon} /> LinkedIn
                </a>
            </motion.div>
            <motion.p
                {...item(5)}
                className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground"
            >
                <HugeiconsIcon icon={Location01Icon} className="size-3.5" /> {profile.location}
            </motion.p>
        </section>
    );
}
