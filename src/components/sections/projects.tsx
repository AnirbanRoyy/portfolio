import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/resume";

export function Projects() {
    return (
        <div className="space-y-4">
            {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                    <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                    >
                        <Card className="transition-colors group-hover:bg-muted/50">
                            <CardContent className="space-y-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-semibold tracking-tight">
                                            {p.title}
                                        </h3>
                                        <Badge variant="outline">
                                            {p.status}
                                        </Badge>
                                    </div>
                                    <HugeiconsIcon
                                        icon={ArrowUpRight01Icon}
                                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                                <p className="text-sm leading-relaxed text-foreground/80">
                                    {p.body}
                                </p>
                                <ul className="space-y-1.5">
                                    {p.points.map((pt) => (
                                        <li
                                            key={pt}
                                            className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:h-px before:w-2.5 before:bg-muted-foreground/60"
                                        >
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tags.map((t) => (
                                        <Badge
                                            key={t}
                                            variant="secondary"
                                            className="font-normal"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                </Reveal>
            ))}
        </div>
    );
}
