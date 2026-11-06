import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/header";
import { profile } from "@/data/resume";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const description =
    "Software Engineer (full stack) building performant React / Next.js frontends and Python backends on Google Cloud.";

export const metadata: Metadata = {
    title: "Anirban Roy — Software Engineer",
    description,
    openGraph: {
        title: "Anirban Roy — Software Engineer",
        description,
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

// Runs before paint so the saved/system theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <footer className="mx-auto w-full max-w-3xl px-6 py-10 text-xs text-muted-foreground">
                    Made with{" "}
                    <span
                        role="img"
                        aria-label="love"
                        className="inline-block motion-safe:animate-heartbeat"
                    >
                        ❤️
                    </span>{" "}
                    by{" "}
                    <a
                        href={`mailto:${profile.email}`}
                        title="Say hi by email"
                        className="font-medium text-orange-600 underline-offset-4 transition-colors hover:text-orange-500 hover:underline dark:text-orange-400 dark:hover:text-orange-300"
                    >
                        Anirban
                    </a>
                </footer>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
