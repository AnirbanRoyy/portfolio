"use client";

import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { useId, useState } from "react";
import type { FeatureGroup } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeatureGroups({
    groups,
}: Readonly<{ groups: FeatureGroup[] }>) {
    const [open, setOpen] = useState<number | null>(null);
    const uid = useId();

    return (
        <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Features
            </p>
            <div className="divide-y divide-border border-y border-border">
                {groups.map((g, i) => {
                    const isOpen = open === i;
                    const panelId = `${uid}-${i}`;
                    return (
                        <div key={g.title}>
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : i)}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className="flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-medium transition-colors hover:text-foreground/70"
                            >
                                <span>
                                    {g.title}
                                    <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
                                        {g.items.length}
                                    </span>
                                </span>
                                <HugeiconsIcon
                                    icon={ArrowDown01Icon}
                                    className={cn(
                                        "size-4 shrink-0 text-muted-foreground transition-transform",
                                        isOpen && "rotate-180",
                                    )}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.ul
                                        id={panelId}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        {g.items.map((it) => (
                                            <li
                                                key={it.name}
                                                className="pb-3 pl-1 text-sm leading-relaxed last:pb-4"
                                            >
                                                <span className="font-medium">
                                                    {it.name}.
                                                </span>{" "}
                                                <span className="text-muted-foreground">
                                                    {it.detail}
                                                </span>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
