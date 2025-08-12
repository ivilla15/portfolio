import { Heart, Github, Linkedin, Mail, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Custom gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Floating background shapes */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Main message */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <span className="text-2xl">👋</span>
              <p className="text-lg font-medium">
                Designed & built with care by Isaiah Villalobos
              </p>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              This portfolio was crafted with attention to detail, modern web
              technologies, and a passion for creating meaningful digital
              experiences. Every pixel has a purpose.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Coffee className="h-5 w-5" />
            </a>
          </div>

          {/* Tech stack mention */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and
              shadcn/ui
            </p>
            <div className="flex items-center justify-center space-x-2 mt-2 text-white/50">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-xs">Made with love in 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
