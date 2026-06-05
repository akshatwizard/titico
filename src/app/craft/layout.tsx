import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Craft — Traditional Weaving Techniques from Varanasi",
  description:
    "Discover how Titico Textiles preserves traditional handloom and power loom weaving techniques passed down through generations of Varanasi artisans.",
  openGraph: {
    title: "The Craft | Titico Textiles",
    description:
      "Skill passed hand to hand — explore the traditional weaving craft behind every Titico fabric.",
    url: "https://www.titicoexports.com/craft",
  },
  alternates: {
    canonical: "https://www.titicoexports.com/craft",
  },
};

export default function CraftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
