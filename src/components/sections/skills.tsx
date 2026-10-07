import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/resume";

export function Skills() {
    return (
        <dl className="space-y-6">
            {skills.map((s, i) => (
                <Reveal
                    key={s.label}
                    delay={i * 0.05}
                    className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                    <dt className="pt-0.5 text-sm text-muted-foreground">
                        {s.label}
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                        {s.items.map((item) => (
                            <Badge
                                key={item}
                                variant="secondary"
                                className="font-normal"
                            >
                                {item}
                            </Badge>
                        ))}
                    </dd>
                </Reveal>
            ))}
        </dl>
    );
}
