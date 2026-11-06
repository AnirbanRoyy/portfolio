"use client";

import { useEffect } from "react";

// On phones every route shows the full page, so a shared link like
// /experience scrolls to that section instead of switching views.
export function ScrollToSection({ id }: Readonly<{ id: string }>) {
    useEffect(() => {
        if (!window.matchMedia("(max-width: 639px)").matches) {
            return;
        }
        document.getElementById(id)?.scrollIntoView();
    }, [id]);

    return null;
}
