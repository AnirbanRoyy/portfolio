export type FeatureGroup = {
    title: string;
    items: { name: string; detail: string }[];
};

export type Project = {
    title: string;
    status: string;
    body: string;
    points: string[];
    featureGroups: FeatureGroup[];
    tags: string[];
    live?: string;
    repos: { label: string; href: string }[];
};

export const projects: Project[] = [
    {
        title: "Sodepur Durga Puja",
        status: "Live",
        body: "A bilingual (Bengali / English) web app that runs my village's annual community Durga Puja: programme schedule, registrations, live competitions, results, donations and a year-by-year archive, with an admin portal so organisers can run it without touching code.",
        points: [
            "Designed and built solo: product, UI/UX, front end, back end, database, security and SEO.",
            "Realtime features for visitors and organisers: a live quiz, a pandal song stream, musical chair and drawing votes.",
            "Built with Claude Code using a spec-driven workflow, on a database shared with production.",
        ],
        featureGroups: [
            {
                title: "Registration",
                items: [
                    {
                        name: "Individual, team and pair formats",
                        detail: "Teams take 2-4 members plus a leader and a team name; pairs cover brother-sister entries. The format is set per programme.",
                    },
                    {
                        name: "One registration per network",
                        detail: "Atomic Redis bit operations (Upstash) block repeat sign-ups. The check fails open, so a Redis outage never blocks registration.",
                    },
                    {
                        name: "Self-service edit and withdraw",
                        detail: "No accounts. A hashed token in an HTTP-only cookie identifies the registrant, with a phone-number recovery path from another device on the same network.",
                    },
                ],
            },
            {
                title: "Live and competitions",
                items: [
                    {
                        name: "Brain Games live quiz",
                        detail: "Teams, rounds and questions, with a random team and random question per round (a Postgres RPC) and a live leaderboard.",
                    },
                    {
                        name: "Pandal song stream",
                        detail: "Visitors request and upvote songs, limited to 3 requests per network, with a played history and re-requests. They can ask organisers to reset their quota.",
                    },
                    {
                        name: "Musical chair engine",
                        detail: "Shuffle-bag song selection, random start offsets and durations, volume fades and a live broadcast of each round.",
                    },
                    {
                        name: "Drawing contest and results",
                        detail: "One vote per device using HMAC visitor hashes, live vote counts, and winners podiums with leaderboards.",
                    },
                ],
            },
            {
                title: "Public site",
                items: [
                    {
                        name: "Bilingual, mobile-first",
                        detail: "Bengali by default with an English toggle (next-intl), light and dark themes, checked at phone widths.",
                    },
                    {
                        name: "Festival pages",
                        detail: "Countdown, programme timeline by Puja day, music page with a persistent mini player, donations with a UPI QR, feedback and a WhatsApp community page.",
                    },
                    {
                        name: "Year-by-year archive",
                        detail: "An editions table keeps every year's registrations, winners and drawings, and a transactional function starts the next year.",
                    },
                ],
            },
            {
                title: "Admin portal",
                items: [
                    {
                        name: "Registrations",
                        detail: "One page for all programmes with filter and search, team-aware editing and deletion.",
                    },
                    {
                        name: "Stream console",
                        detail: "Approve or reject requests, play next, skip, volume control, a screen wake-lock, quota-reset requests, bulk-adding library songs and removing songs.",
                    },
                    {
                        name: "Event management",
                        detail: "Programmes, quiz and musical-chair consoles, drawings, results, songs, feedback inbox, event settings and a new-year wizard.",
                    },
                ],
            },
            {
                title: "Security and data",
                items: [
                    {
                        name: "Row Level Security",
                        detail: "Anonymous visitors can only read public tables. Every write goes through a server action with the service-role key.",
                    },
                    {
                        name: "Private contact data",
                        detail: "Phone numbers and guardian details sit in a separate table that anon cannot read, a split made after a security review found a leak.",
                    },
                    {
                        name: "Admin auth and rate limits",
                        detail: "A signed JWT in an HTTP-only cookie, with a guard in the proxy and again inside every server action. Postgres-backed rate limiting covers registrations and song requests.",
                    },
                    {
                        name: "Safe changes on a shared database",
                        detail: "Migrations are additive only because the database is shared with production, so deployed code never breaks mid-change.",
                    },
                ],
            },
            {
                title: "Performance, SEO and process",
                items: [
                    {
                        name: "Perceived performance",
                        detail: "Skeleton screens on every route and a custom animated dhol loader, plus cached programme data and Vercel Speed Insights.",
                    },
                    {
                        name: "SEO",
                        detail: "Per-locale metadata, structured data, sitemap, robots and a generated share image, aimed at local searches.",
                    },
                    {
                        name: "Spec-driven workflow",
                        detail: "Larger changes go spec, plan, then implementation. A hook formats and lints after every code change, and features are checked against a production build.",
                    },
                ],
            },
        ],
        tags: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind v4",
            "shadcn/ui",
            "Supabase",
            "Upstash Redis",
            "Cloudinary",
            "next-intl",
            "Vercel",
        ],
        live: "https://sodepur-durga-puja.vercel.app",
        repos: [
            { label: "GitHub", href: "https://github.com/AnirbanRoyy/durga-puja" },
        ],
    },
    {
        title: "CloudTube",
        status: "In progress",
        body: "A cloud-native video platform, evolved from a MERN YouTube clone. The goal is a production-style pipeline: upload to Cloud Storage, Pub/Sub, an FFmpeg worker on Cloud Run, HLS output served through a CDN.",
        points: [
            "Planned around Terraform, CI/CD, observability, Redis caching and RBAC, plus load tests.",
            "Backend: Node, Express and Mongoose API with JWT auth, covering users, videos, comments, playlists and subscriptions.",
            "Frontend: Next.js App Router with shadcn/ui, with live-API and mock-data modes behind one data layer.",
        ],
        featureGroups: [],
        tags: [
            "Next.js",
            "TypeScript",
            "Express",
            "MongoDB",
            "GCP",
            "Pub/Sub",
            "Cloud Run",
            "FFmpeg",
            "Terraform",
        ],
        repos: [
            { label: "Frontend", href: "https://github.com/AnirbanRoyy/cloudtube-frontend" },
            { label: "Backend", href: "https://github.com/AnirbanRoyy/cloudtube-backend" },
        ],
    },
];
