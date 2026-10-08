import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Highlights", "#highlights"],
    ["Contact", "#contact"],
];

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
                <a href="#top" className="text-sm font-semibold tracking-tight">
                    AR
                </a>
                <nav className="flex items-center gap-1 text-sm text-muted-foreground">
                    {nav.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="hidden rounded-md px-2.5 py-1.5 transition-colors hover:text-foreground sm:block"
                        >
                            {label}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
