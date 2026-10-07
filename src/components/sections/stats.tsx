import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { stats } from "@/data/resume";

export function Stats() {
    return (
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s, i) => (
                <Reveal
                    key={s.label}
                    delay={i * 0.06}
                    className="bg-background p-5"
                >
                    <div className="text-3xl font-semibold tracking-tight">
                        <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">
                        {s.label}
                    </div>
                    {s.note && (
                        <div className="mt-1 font-mono text-[11px] text-foreground/60">
                            {s.note}
                        </div>
                    )}
                </Reveal>
            ))}
        </div>
    );
}
