import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Coffee,
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-4 relative overflow-hidden bg-muted/50"
    >
      {/* Subtle top border divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-number">// 05</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to build something amazing together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left side - Contact Form */}
          <Card className="border-0 rounded-none bg-background/95 backdrop-blur-sm">
            <CardHeader className="p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
              </div>
              <p className="text-muted-foreground text-lg">
                Got a project in mind? Let's discuss how we can bring your ideas
                to life.
              </p>
            </CardHeader>

            <CardContent className="px-12 pb-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="h-12 border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="h-12 border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="h-12 border-2 focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, or just say hello! I'd love to hear from you."
                  rows={6}
                  className="border-2 focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-medium transform hover:scale-[1.02] transition-all duration-300">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Right side - Contact Info with Gradient Background */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
            {/* Blurred gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />

            {/* Floating shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float" />
            <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce" />

            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Get In Touch</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    I'm always excited to connect with fellow developers,
                    potential collaborators, or anyone with interesting
                    projects. Let's create something extraordinary together.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">ivilla.devcs@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-white/80">github.com/ivilla15</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-white/80">
                        linkedin.com/in/isaiah-villalobos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Coffee className="h-5 w-5" />
                    <span className="font-medium">Coffee Chat?</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    I'm always up for a virtual coffee chat to discuss
                    technology, share experiences, or explore potential
                    collaborations. Don't hesitate to reach out!
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
