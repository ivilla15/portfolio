import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { ContactForm } from "@/components/forms";
import { Section, Typography } from "@/components/ui";

export const links = [
  {
    label: "Email",
    value: "ivilla.devcs@gmail.com",
    href: "mailto:ivilla.devcs@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/ivilla15",
    href: "https://github.com/ivilla15",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/isaiah-villalobos/",
    href: "https://www.linkedin.com/in/isaiah-villalobos/",
    icon: Linkedin,
  },
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Let’s connect"
      description="I’m always open to talking about software engineering roles, interesting projects, and opportunities to keep building."
    >
      <div className="shadow-medium">
        <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="flex min-h-full h-full flex-col bg-surface-3 p-6 sm:p-7 rounded-t-[28px] lg:rounded-tl-[28px] lg:rounded-bl-[28px] lg:rounded-tr-none lg:rounded-br-none lg:p-8">
            <Typography variant="h3" className="text-2xl sm:text-3xl">
              Reach out directly
            </Typography>

            <Typography variant="body" className="mt-3">
              You can send a message through the form or connect with me through
              the links below.
            </Typography>

            <div className="mt-8 space-y-4">
              {links.map(({ label, value, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="block rounded-[20px] bg-surface-4 p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-2 hover:shadow-medium"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <Typography
                        variant="label"
                        className="normal-case tracking-[0.08em]"
                      >
                        {label}
                      </Typography>

                      <Typography
                        variant="body"
                        className="mt-1 break-all text-sm sm:text-base"
                      >
                        {value}
                      </Typography>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
