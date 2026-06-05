import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Request a Fabric Sample or Export Quote",
  description:
    "Get in touch with Titico Textiles for fabric sample requests, bulk export orders, custom weave inquiries or private label garments. Response within 24 hours.",
  openGraph: {
    title: "Contact | Titico Textiles",
    description:
      "Begin the conversation — request samples, bulk quotes or custom fabric development from our export team in Varanasi.",
    url: "https://www.titicoexports.com/contact",
  },
  alternates: {
    canonical: "https://www.titicoexports.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
