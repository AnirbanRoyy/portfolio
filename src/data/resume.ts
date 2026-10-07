export const profile = {
    name: "Anirban Roy",
    role: "Software Engineer · Full Stack",
    location: "Kolkata, India",
    email: "anirban15987@gmail.com",
    phone: "+91 9123306126",
    summary:
        "Software engineer with ~2 years on SnapApp, Bluevector AI's production product. I work across a React / TypeScript / Next.js frontend and a Python backend on Google Cloud, with a focus on performance, reliability and clean architecture.",
    links: {
        github: "https://github.com/AnirbanRoyy",
        githubWork: "https://github.com/anirban-roy-bv",
        linkedin: "https://www.linkedin.com/in/anirbanroyy",
        leetcode: "https://leetcode.com/anirban_royy",
    },
};

export const stats = [
    {
        value: 855,
        suffix: "+",
        label: "commits in snapapp-next",
        note: "top contributor",
    },
    {
        value: 454,
        suffix: "+",
        label: "commits in SnapApp-2",
        note: "2nd highest",
    },
    { value: 120, suffix: "+", label: "pull requests merged" },
    {
        value: 95,
        suffix: "%",
        label: "faster critical load path",
        note: "120s → <5s",
    },
];

export const experience = {
    title: "Software Developer",
    company: "Bluevector AI",
    period: "2025 – Present",
    intro: "SnapApp is Bluevector AI's product. I work across snapapp-next (React, TypeScript, Next.js) and SnapApp-2 (Python, Pydantic, SQLAlchemy, SQLModel, Alembic).",
    groups: [
        {
            title: "SnapApp Extensions",
            points: [
                "Designed the Extension system: users run custom actions and expressions from code in their own GitHub repos and branches.",
                "Encrypted stored GitHub PATs and added a package allowlist to control what extensions can install.",
                "Cut extension reload from ~1 minute to under 4 seconds.",
                "Widely adopted in the IOWA project, supporting its successful deployment.",
            ],
        },
        {
            title: "Performance & reliability",
            points: [
                "Moved a critical rendering path into backend-driven pipelines: ~120s to under 5s (~95%).",
                "Replaced per-record API calls with backend batch operations: multi-edit/delete from >1 minute to under 14 seconds.",
                "Resolved production memory leaks, broken sockets, frequent logouts and infinite reconnect loops.",
                "Traced a widespread auth failure to a wrong Firebase API key configuration and restored service.",
            ],
        },
        {
            title: "Architecture & backend",
            points: [
                "Designed a unified AutoSave pipeline shared by Save/Drop and AutoSave flows, with version tables and row types (Python, MySQL, Alembic).",
                "Applied SOLID and the Factory Method pattern to extensions and frontend validation, reducing conditional logic.",
                "Redesigned timezone handling: UTC persisted in the backend, presentation in the frontend.",
                "Firestore large-field chunking for documents beyond the size limit, with transparent reassembly.",
                "Set a 90-day lifecycle policy on stale Cloud Storage SQL dumps to control cost.",
            ],
        },
        {
            title: "Frontend & UI",
            points: [
                "Built Calendar, Deck, Card and Diagram views, Favorites, Feeds, Format Rules and conditional display workflows.",
                "Reusable components: multi-select, Rating, Signature, Header Actions, ViewBuilder.",
                "Utilities such as useDebounce, plus fuzzy-search and Express Builder improvements.",
            ],
        },
    ],
};

export const skills = [
    {
        label: "Languages",
        items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
        label: "Frontend",
        items: [
            "React",
            "Next.js",
            "shadcn/ui",
            "Custom hooks",
            "Component design",
        ],
    },
    {
        label: "Backend",
        items: [
            "Python",
            "Pydantic",
            "SQLAlchemy",
            "SQLModel",
            "Node.js",
            "Express.js",
            "REST",
            "WebSockets",
        ],
    },
    {
        label: "Data",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Firestore", "Alembic"],
    },
    {
        label: "Cloud & tools",
        items: [
            "GCP",
            "Compute Engine",
            "GKE",
            "Cloud Storage",
            "Pub/Sub",
            "IAM",
            "Firebase",
            "Git",
        ],
    },
];

export const achievements = [
    {
        title: "Smart India Hackathon 2024 — Winner",
        year: "2024",
        body: "Won SIH 2024 (SIH1588) with a platform connecting food donors and NGOs to reduce food waste and hunger.",
        href: "https://drive.google.com/file/d/1xi0DsVjbKgxEp72YI9y8yY5OtmDmI7AX/view?usp=drive_link",
    },
    {
        title: "SilverZone Computer Olympiad — Gold",
        year: "2015",
        body: "1st in school (85.711/100), State Rank 3, National Rank 30.",
        href: "https://drive.google.com/drive/folders/1M4t7pAkcP-IJh75xx-EMzAWTK1PZ-a64?usp=sharing",
    },
];

export const education = {
    school: "Future Institute of Engineering and Management",
    degree: "Bachelor of Computer Application (BCA)",
    period: "2022 – 2025",
    detail: "CGPA 8.63",
    href: "https://drive.google.com/file/d/1iQMJq2EItjo-Qc7dh64u5mmBYcjs9qii/view?usp=sharing",
};

export const certifications = [
    {
        title: "Google Cloud Professional Cloud Architect",
        body: "Architecture, scalability, reliability, security, IAM, networking, cost optimization.",
        href: "https://www.credly.com/badges/261dddeb-6a12-4c8a-96bb-2ca97e57ae0d/public_url",
    },
    {
        title: "Google Cloud Associate Cloud Engineer",
        body: "GKE, Compute Engine, Cloud Storage, Pub/Sub, IAM, networking, deployment.",
        href: "https://www.credly.com/badges/579d0ed5-512e-4dfc-8bed-52c66a5d71d4/public_url",
    },
];
