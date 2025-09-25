// components/sections/ContactSection.tsx
import { Section } from "@/components/ui/section";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Github, Linkedin, Coffee } from "lucide-react";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      direction="none"
      threshold={0}
      margin="0px 0px -1px 0px" // eager reveal
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      once={false}
      background={
        <>
          {/* Center vignette */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60vh]
               bg-[radial-gradient(60%_50%_at_50%_50%,rgba(88,28,135,0.18),transparent_70%)]
               dark:bg-[radial-gradient(60%_50%_at_50%_50%,rgba(88,28,135,0.33),transparent_70%)]"
          />

          {/* Left glow */}
          <div
            className="absolute left-[-10%] top-[25%] w-[46vw] h-[46vw] rounded-full blur-xl opacity-20
               bg-gradient-to-tr from-indigo-500/40 via-purple-500/28 to-fuchsia-500/24
               dark:opacity-25 dark:from-indigo-500/50 dark:via-purple-500/40 dark:to-fuchsia-500/35"
          />

          {/* Right glow */}
          <div
            className="absolute right-[-12%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-xl opacity-20
               bg-gradient-to-br from-cyan-400/28 via-sky-500/22 to-emerald-400/22
               dark:opacity-20 dark:from-cyan-400/35 dark:via-sky-500/28 dark:to-emerald-400/28"
          />

          {/* Soft wash */}
          <div
            className="absolute inset-0
               bg-[radial-gradient(720px_420px_at_50%_40%,rgba(147,51,234,0.14),transparent_65%),radial-gradient(640px_380px_at_18%_22%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(600px_380px_at_82%_18%,rgba(168,85,247,0.10),transparent_60%)]
               dark:bg-[radial-gradient(780px_460px_at_50%_40%,rgba(147,51,234,0.18),transparent_65%),radial-gradient(680px_420px_at_18%_22%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(620px_420px_at_82%_18%,rgba(168,85,247,0.12),transparent_60%)]"
          />
        </>
      }
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading (no animation) */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Let&apos;s <span className="gradient-cta-text">Connect</span>
          </h2>
          <p className="text-[1.05rem] text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Ready to build something amazing together?
          </p>
        </div>

        {/* Split layout: form / info (no transitions/animations) */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left — form */}
          <div className="bg-background">
            <ContactForm />
          </div>

          {/* Right — info */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
            {/* lightweight tint (no backdrop-blur) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15"
              aria-hidden="true"
            />
            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Get In Touch</h3>
                  <p className="text-white/85 text-lg leading-relaxed">
                    I&apos;m always excited to connect with fellow developers,
                    potential collaborators, or anyone with interesting
                    projects.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href="mailto:ivilla.devcs@gmail.com"
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/85">ivilla.devcs@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/ivilla15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Github className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-white/85">github.com/ivilla15</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isaiah-villalobos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Linkedin className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-white/85">
                        linkedin.com/in/isaiah-villalobos
                      </p>
                    </div>
                  </a>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">Coffee Chat?</span>
                  </div>
                  <p className="text-white/85 leading-relaxed">
                    I&apos;m always up for a virtual coffee chat to discuss
                    technology, share experiences, or explore potential
                    collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
