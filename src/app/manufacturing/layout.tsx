import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing — Vertically Integrated Textile Production",
  description:
    "Titico Textiles operates state-of-the-art manufacturing units in Varanasi, Bhagalpur and Bangalore. 120+ looms, OEKO-TEX certified, 8,000 metres/day production capacity.",
  openGraph: {
    title: "Manufacturing | Titico Textiles",
    description:
      "From yarn sourcing to export packing — explore Titico's 6-stage vertically integrated fabric manufacturing process.",
    url: "https://www.titicoexports.com/manufacturing",
  },
  alternates: {
    canonical: "https://www.titicoexports.com/manufacturing",
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
