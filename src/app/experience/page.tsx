import type { Metadata } from "next";
import { Portfolio } from "@/components/portfolio";

export const metadata: Metadata = {
    title: "Experience · Anirban Roy",
};

export default function Page() {
    return <Portfolio view="experience" />;
}
