import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/reveal";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/resume";

const linkBadge = badgeVariants({ variant: "outline" }) + " gap-1.5 px-2.5 py-3 text-sm transition-colors hover:bg-muted";

export function Projects() {
    return (
        <div className="space-y-4">
            {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                    <Card>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-lg font-semibold tracking-tight">
                                    {p.title}
                                </h3>
                                <Badge variant="outline">{p.status}</Badge>
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
                            <div className="flex flex-wrap gap-2 pt-1">
                                {p.live && (
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={linkBadge}
                                    >
                                        <HugeiconsIcon
                                            icon={LinkSquare02Icon}
                                            className="size-3.5"
                                        />
                                        Live site
                                    </a>
                                )}
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={linkBadge}
                                >
                                    <HugeiconsIcon
                                        icon={GithubIcon}
                                        className="size-3.5"
                                    />
                                    GitHub
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </Reveal>
            ))}
        </div>
    );
}
