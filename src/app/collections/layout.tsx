import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabric Collections — Jacquard, Silk, Linen, Tussar & More",
  description:
    "Browse Titico Textiles' full range of export fabrics including Jacquard, Mulberry Silk, Linen, Tussar, Polyester, and Embroidery. Custom orders welcome.",
  openGraph: {
    title: "Fabric Collections | Titico Textiles",
    description:
      "Premium jacquard, linen, mulberry silk, tussar and embroidery fabrics crafted for global fashion and home textile markets.",
    url: "https://www.titicoexports.com/collections",
  },
  alternates: {
    canonical: "https://www.titicoexports.com/collections",
  },
};

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
