import type { NextConfig } from "next";
import { profile } from "./src/data/resume";

const nextConfig: NextConfig = {
    /* config options here */
    cacheComponents: true,
    // Shareable short link: anirban-roy.vercel.app/resume opens the live Google Doc.
    // Temporary (307) so browsers don't cache it if the doc link ever changes.
    async redirects() {
        return [
            {
                source: "/resume",
                destination: profile.links.resume,
                permanent: false,
            },
        ];
    },
    partialPrefetching: true,
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
