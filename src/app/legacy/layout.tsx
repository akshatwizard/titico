import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legacy — 45 Years of Textile Manufacturing Excellence",
  description:
    "Learn about Titico Textiles' 45-year legacy of manufacturing and exporting premium fabrics. National Export Award winners, exporting to USA, UK, Germany, Japan and 20+ countries.",
  openGraph: {
    title: "Our Legacy | Titico Textiles",
    description:
      "From a single loom in 1978 to a $25M export house — the Titico story of craft, quality and global trade.",
    url: "https://www.titicoexports.com/legacy",
  },
  alternates: {
    canonical: "https://www.titicoexports.com/legacy",
  },
};

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
