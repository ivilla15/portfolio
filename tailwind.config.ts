import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],

  // Keep dynamic gradient classes from being purged (used in data-driven badges/cards)
  safelist: [
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "from-blue-500",
    "to-cyan-500",
    "from-purple-700",
    "to-purple-900",
    "from-blue-600",
    "to-blue-800",
    "from-yellow-400",
    "to-yellow-600",
    "from-green-500",
    "to-green-700",
    "from-pink-500",
    "to-red-500",
    "from-cyan-400",
    "to-blue-500",
    "from-green-600",
    "to-pink-600",
    "from-fuchsia-500",
    "to-indigo-500",
    "from-emerald-500",
    "to-emerald-700",
    "from-purple-400",
    "to-pink-500",
    "from-rose-400",
    "to-rose-600",
    "from-green-500",
    "to-blue-600",
    "from-orange-500",
    "to-orange-700",
    "from-orange-500",
    "to-yellow-500",
    "from-yellow-500",
    "to-blue-600",
    "from-purple-500",
    "to-indigo-600",
    "from-red-700",
    "to-blue-700",
    "from-cyan-700",
    "to-teal-300",
    "from-indigo-500",
    "to-pink-600",
    "from-fuchsia-500",
    "to-fuchsia-700",
    "from-lime-500",
    "to-emerald-600",
    // awards / sections
    "from-yellow-400",
    "to-orange-500",
    "from-purple-500",
    "to-pink-500",
    "from-blue-500",
    "to-cyan-500",
    "from-green-500",
    "to-teal-500",
    "from-red-500",
    "to-pink-500",
    "from-indigo-500",
    "to-violet-500",
    // hero/cta
    "from-blue-600",
    "via-fuchsia-600",
    "to-cyan-500",
    // extras seen in components
    "from-teal-500",
    "to-cyan-600",
    "from-yellow-500",
    "to-orange-600",
    "from-indigo-500",
    "to-fuchsia-600",
    "from-blue-600",
    "to-purple-600",
    "from-blue-500",
    "to-purple-500",
    "from-blue-600",
    "to-purple-700",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "soft-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        card: "0 12px 30px rgba(0,0,0,0.25)",
        glow: "0 0 32px rgba(99,102,241,0.35)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "fade-in-scale": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-in-scale": "fade-in-scale 0.5s ease-out forwards",
      },

      backgroundImage: {
        "vignette-center":
          "radial-gradient(60% 50% at 50% 50%, rgba(99,102,241,.22) 0%, rgba(99,102,241,.06) 70%, transparent 100%)",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      addUtilities({
        ".will-change-transform": { willChange: "transform" },
        ".will-change-opacity": { willChange: "opacity" },
      });
    },
  ],
};

export default config;
