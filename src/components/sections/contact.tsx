import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/resume";

export function Contact() {
    return (
        <Reveal>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s build something.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                I&apos;m looking for Software Engineer / Full Stack Engineer
                roles. The best way to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
                <a
                    className={buttonVariants()}
                    href={`mailto:${profile.email}`}
                >
                    <HugeiconsIcon icon={Mail01Icon} /> {profile.email}
                </a>
                <a
                    className={buttonVariants({ variant: "outline" })}
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <HugeiconsIcon icon={Linkedin01Icon} /> LinkedIn
                </a>
                <a
                    className={buttonVariants({ variant: "outline" })}
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <HugeiconsIcon icon={GithubIcon} /> GitHub
                </a>
            </div>
        </Reveal>
    );
}
