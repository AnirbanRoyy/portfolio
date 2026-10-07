import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { achievements, certifications, education } from "@/data/resume";

function LinkCard({
    title,
    meta,
    body,
    href,
}: Readonly<{
    title: string;
    meta?: string;
    body: string;
    href: string;
}>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group block h-full"
        >
            <Card className="h-full transition-colors group-hover:bg-muted/50">
                <CardContent className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                        <h4 className="text-sm font-medium leading-snug">
                            {title}
                        </h4>
                        <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </div>
                    {meta && (
                        <p className="font-mono text-xs text-muted-foreground">
                            {meta}
                        </p>
                    )}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {body}
                    </p>
                </CardContent>
            </Card>
        </a>
    );
}

function Group({
    label,
    children,
}: Readonly<{
    label: string;
    children: React.ReactNode;
}>) {
    return (
        <div className="space-y-3">
            <Reveal>
                <h3 className="text-sm text-muted-foreground">{label}</h3>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">{children}</div>
        </div>
    );
}

export function Highlights() {
    return (
        <div className="space-y-10">
            <Group label="Achievements">
                {achievements.map((a, i) => (
                    <Reveal key={a.title} delay={i * 0.06}>
                        <LinkCard
                            title={a.title}
                            meta={a.year}
                            body={a.body}
                            href={a.href}
                        />
                    </Reveal>
                ))}
            </Group>
            <Group label="Certifications">
                {certifications.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.06}>
                        <LinkCard title={c.title} body={c.body} href={c.href} />
                    </Reveal>
                ))}
            </Group>
            <Group label="Education">
                <Reveal>
                    <LinkCard
                        title={education.school}
                        meta={`${education.period} · ${education.detail}`}
                        body={education.degree}
                        href={education.href}
                    />
                </Reveal>
            </Group>
        </div>
    );
}
