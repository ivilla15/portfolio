import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { ContactForm } from "@/components/forms";
import { Card, CardContent, Section, Typography } from "@/components/ui";

const contactLinks = [
  {
    label: "Email",
    value: "isaiah@example.com",
    href: "mailto:isaiah@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/in/your-profile",
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
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-surface-3/60 p-6 sm:p-7 lg:p-8">
              <Typography variant="h3" className="text-2xl">
                Reach out directly
              </Typography>

              <Typography variant="body" className="mt-3">
                You can send a message through the form or connect with me
                through the links below.
              </Typography>

              <div className="mt-8 space-y-4">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="block rounded-[20px] bg-surface-2 p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-medium"
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

            <div className="p-6 sm:p-7 lg:p-8">
              <ContactForm />
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
