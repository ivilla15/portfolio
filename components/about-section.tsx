import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/section";

type GlowImageProps = {
  src: string;
  alt: string;
};

const GlowImage: React.FC<GlowImageProps> = ({ src, alt }) => (
  <div className="relative w-80 h-80">
    {/* soft aura */}
    <div className="absolute -inset-10 -z-10">
      <div className="w-80 h-80 mx-auto rounded-full blur-2xl opacity-30 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400" />
    </div>

    <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10">
      <img src={src} alt={alt} className="w-72 h-72 object-cover rounded-2xl" />
    </div>

    {/* small accents */}
    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-ping opacity-80" />
    <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce" />
    <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 animate-pulse" />
  </div>
);

export function AboutSection() {
  return (
    <Section
      id="about"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-cta-text">Me</span>
          </h2>
          <p className="text-xl text-base max-w-2xl mx-auto">
            The story behind the code
          </p>
        </div>

        {/* ===== Row 1: image (left on lg) ↔ text ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image on mobile appears AFTER text; on desktop it goes LEFT */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <GlowImage
              src="https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/Professional%20Photo.webp"
              alt="Professional photo of Isaiah"
            />
          </div>

          {/* Text is first on mobile, right on desktop */}
          <div className="order-1 lg:order-2">
            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10">
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-base">
                    The Developer
                  </h3>
                </div>
                <p className="text-base leading-relaxed">
                  Hi there! I&apos;m Isaiah, a Computer Science major at Cal
                  State LA and a Junior Web Developer Associate at the
                  University Student Union. I work across the stack: building
                  accessible, responsive interfaces, implementing backend
                  features like authentication, and managing SQL databases. I
                  also keep growing my cloud skills with AWS. My goal is to take
                  projects from idea to deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ===== Row 2: text (left) ↔ image (right) ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text left */}
          <div className="order-2 lg:order-1">
            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/10">
                    <Lightbulb className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-base">
                    The Problem Solver
                  </h3>
                </div>
                <p className="text-base leading-relaxed">
                  Development is about helping real people. I like debugging
                  tricky layout or logic issues, designing components that work
                  for everyone, and building backend features that make apps
                  reliable. Constraints don&apos;t slow me down, they help me
                  ship solutions that are clear, maintainable, and easy for the
                  next developer to extend.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Image right */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <GlowImage
              src="https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/coding.webp"
              alt="Isaiah solving problems"
            />
          </div>
        </div>

        {/* ===== Row 3: image (left) ↔ text (right) ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="flex justify-center lg:justify-start">
            <GlowImage
              src="https://udxisykpeytksyqndzys.supabase.co/storage/v1/object/public/portfolio/Hawaii.webp"
              alt="Hawaii picture of Isaiah"
            />
          </div>

          {/* Text on the right */}
          <div>
            <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/10">
                    <Coffee className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-base">The Human</h3>
                </div>
                <p className="text-base leading-relaxed">
                  I believe good software comes from good teamwork. I enjoy
                  collaborating, sharing ideas, and supporting the people I work
                  with. I care deeply about accessibility and inclusive design,
                  because technology should give everyone the same experience,
                  including people who are often overlooked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
