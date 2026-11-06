"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { tabs } from "@/data/tabs";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
                <Link href="/" className="text-sm font-semibold tracking-tight">
                    AR
                </Link>
                <nav className="flex items-center gap-1 text-sm text-muted-foreground">
                    {tabs.map((t) => {
                        const href = `/${t.id}`;
                        const active = pathname === href;
                        return (
                            <Link
                                key={t.id}
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                    "relative hidden rounded-md px-2.5 py-1.5 transition-colors hover:text-foreground sm:block",
                                    active && "text-foreground",
                                )}
                            >
                                {t.label}
                                {active && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute inset-x-2.5 -bottom-[13px] h-px bg-foreground"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 40,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
