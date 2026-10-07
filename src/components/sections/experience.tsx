"use client";

import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { experience } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Experience() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div>
            <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-semibold tracking-tight">
                        {experience.title}{" "}
                        <span className="text-muted-foreground">
                            · {experience.company}
                        </span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                        {experience.period}
                    </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {experience.intro}
                </p>
            </Reveal>

            <div className="mt-8 divide-y divide-border border-y border-border">
                {experience.groups.map((g, i) => {
                    const isOpen = open === i;
                    return (
                        <Reveal key={g.title} delay={i * 0.05}>
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : i)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-colors hover:text-foreground/70"
                            >
                                {g.title}
                                <HugeiconsIcon
                                    icon={ArrowDown01Icon}
                                    className={cn(
                                        "size-4 text-muted-foreground transition-transform",
                                        isOpen && "rotate-180",
                                    )}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        {g.points.map((p) => (
                                            <li
                                                key={p}
                                                className="relative pb-3 pl-5 text-sm leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-2.5 before:h-px before:w-2.5 before:bg-muted-foreground/60 last:pb-5"
                                            >
                                                {p}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    );
}
