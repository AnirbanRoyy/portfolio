// Each tab is a real route on desktop (/experience, ...). On phones every
// route renders the full single-page layout instead.
export const tabs = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "highlights", label: "Highlights" },
    { id: "contact", label: "Contact" },
] as const;

export type TabId = (typeof tabs)[number]["id"];

// "home" is the hero and stats shown at "/".
export type ViewId = "home" | TabId;

export function tabLabel(id: TabId) {
    return tabs.find((t) => t.id === id)!.label;
}
