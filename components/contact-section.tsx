// components/sections/ContactSection.tsx
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Github, Linkedin, Coffee } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-4 relative overflow-hidden bg-muted/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// 05</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to build something amazing together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left = form */}
          <ContactForm />

          {/* Right = info */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Get In Touch</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    I&apos;m always excited to connect with fellow developers,
                    potential collaborators, or anyone with interesting
                    projects.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href="mailto:ivilla.devcs@gmail.com"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">ivilla.devcs@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/ivilla15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Github className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-white/80">github.com/ivilla15</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isaiah-villalobos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Linkedin className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-white/80">
                        linkedin.com/in/isaiah-villalobos
                      </p>
                    </div>
                  </a>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Coffee className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">Coffee Chat?</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
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
    </section>
  );
}
