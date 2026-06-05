import type { Metadata } from "next";
import { Poppins, Montserrat_Alternates, Playfair, } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import SmoothScrollProvider from "../lib/smooth_scroll";
import Footer from "../components/footer";
import BG from "../components/ui/bg";

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

const playfair = Playfair({
  variable: "--font-play",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: {
    default: "Titico Textiles | Premium Silk & Fabric Exporters, Varanasi",
    template: "%s | Titico Textiles",
  },
  description:
    "Titico Textiles is a leading manufacturer and exporter of premium silk, linen, jacquard, tussar and embroidery fabrics from Varanasi, India. Exporting to 20+ countries since 1978.",
  metadataBase: new URL("https://www.titicoexports.com"),
  openGraph: {
    siteName: "Titico Textiles",
    type: "website",
    locale: "en_IN",
    url: "https://www.titicoexports.com",
    images: [
      {
        url: "/images/logo/new-logo.png",
        width: 1200,
        height: 630,
        alt: "Titico Textiles — Premium Fabric Exporters, Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@titicoexports",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo/logo.png" type="image/x-icon" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
          {/* <BG /> */}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
