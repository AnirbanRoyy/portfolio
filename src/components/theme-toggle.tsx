"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const toggle = () => {
        const dark = document.documentElement.classList.toggle("dark");
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        } catch {}
    };
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
        >
            <HugeiconsIcon
                icon={Sun03Icon}
                className="hidden size-4 dark:block"
            />
            <HugeiconsIcon icon={Moon02Icon} className="size-4 dark:hidden" />
        </Button>
    );
}
