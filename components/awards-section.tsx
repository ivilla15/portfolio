import { Section, Stagger } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

export function AwardsSection() {
  const awards = [
    {
      title: "Dean's List",
      organization: "California State University, Los Angeles",
      year: "2022–Present",
      description: "Awarded for academic excellence with a GPA above 3.8.",
      emoji: "🎓",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Edison STEM Scholarship ($4,500)",
      organization: "Edison International",
      year: "2022–Present",
      description:
        "Awarded to aspiring STEM leaders who demonstrate innovation, curiosity, and commitment to shaping the future.",
      emoji: "🏆",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Sean King Memorial Scholarship ($700)",
      organization: "California State University, Los Angeles",
      year: "2023–Present",
      description:
        "Awarded to engineering students actively involved in professional student organizations.",
      emoji: "⭐",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Eyster Scholarship ($1,010)",
      organization: "California State University, Los Angeles",
      year: "2024–Present",
      description:
        "Merit-based award recognizing academic achievement and departmental involvement.",
      emoji: "💻",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Certificate of Excellence",
      organization: "Faculty Recognition Award",
      year: "2022",
      description:
        "Presented by faculty to computer science students for outstanding performance and contributions in the classroom.",
      emoji: "🎤",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "GMiS 2025 Registration Reimbursement Winner",
      organization: "Great Minds in STEM / CAHSI",
      year: "2025",
      description:
        "Selected as a recipient of full conference registration coverage to attend GMiS 2025 in San Diego as a CS student representative.",
      emoji: "🎟️",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <Section
      id="awards"
      direction="up"
      className="min-h-[100svh] scroll-mt-32 overflow-hidden"
      contentClassName="px-4 py-24 md:py-28"
      background={
        <>
          {/* centered vignette (feathered) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[56vh] bg-[radial-gradient(60%_50%_at_50%_50%,rgba(99,102,241,.22)_0%,rgba(99,102,241,.06)_70%,transparent_100%)]" />
          {/* side glows */}
          <div className="absolute left-[-12%] top-[22%] w-[42vw] h-[42vw] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-purple-500/45 via-fuchsia-500/35 to-pink-500/28" />
          <div className="absolute right-[-10%] bottom-[18%] w-[44vw] h-[44vw] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-400/38 via-sky-500/30 to-emerald-400/26" />
        </>
      }
    >
      <div className="max-w-6xl mx-auto">
        <Stagger step={100}>
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Awards & <span className="gradient-cta-text">Achievements</span>
            </h2>
            <p className="text-[1.05rem] text-slate-200/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Milestones that shaped my journey
            </p>
          </div>

          {/* Badge-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Stagger key={award.title} step={0} start={index * 80}>
                <Card className="creative-card border-0 bg-gradient-to-br from-background to-muted/10 overflow-hidden group">
                  <CardContent className="p-6 relative">
                    {/* subtle card tint */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative space-y-4">
                      {/* Emoji and year */}
                      <div className="flex items-center justify-between">
                        <div className="text-4xl">{award.emoji}</div>
                        <div
                          className={`px-3 py-1 rounded-full bg-gradient-to-r ${award.color} text-white text-sm font-medium`}
                        >
                          {award.year}
                        </div>
                      </div>

                      {/* Title and org */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                          {award.title}
                        </h3>
                        <p className="text-[1.05rem] text-slate-200/90 font-medium leading-relaxed">
                          {award.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-[0.95rem] text-slate-200/85 leading-relaxed">
                        {award.description}
                      </p>

                      {/* Decorative dot */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${award.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Stagger>
            ))}
          </div>

          {/* Fun stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-cta-text">5+</div>
              <p className="text-sm text-slate-200/80">
                Academic & Merit Awards
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-cta-text">10+</div>
              <p className="text-sm text-slate-200/80">Web Projects Built</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-cta-text">4+</div>
              <p className="text-sm text-slate-200/80">Student Teams Led</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-cta-text">5+</div>
              <p className="text-sm text-slate-200/80">Talks & Presentations</p>
            </div>
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
