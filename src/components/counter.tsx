"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Counter({
    to,
    suffix = "",
}: Readonly<{ to: number; suffix?: string }>) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const reduce = useReducedMotion();
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduce) return;
        const controls = animate(0, to, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (v) => setN(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, reduce, to]);

    return (
        <span ref={ref} className="tabular-nums">
            {reduce ? to : n}
            {suffix}
        </span>
    );
}
