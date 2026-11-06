import type { Metadata } from "next";
import { Portfolio } from "@/components/portfolio";

export const metadata: Metadata = {
    title: "Skills · Anirban Roy",
};

export default function Page() {
    return <Portfolio view="skills" />;
}
