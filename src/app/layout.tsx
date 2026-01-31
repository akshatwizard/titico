import type { Metadata } from "next";
import { Poppins, Montserrat_Alternates, Tangerine, Dancing_Script,Playfair,Yeseva_One } from "next/font/google";
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

const yeseva = Yeseva_One({
  variable: "--font-yeseva",
  weight: ["400"]
});

const tangerine = Tangerine({
  variable: "--font-tan",
  weight: ["400", "700"]
});
const dancing = Dancing_Script({
  variable: "--font-dancing",
  weight: ["400", "600", "500", "700"]
});

export const metadata: Metadata = {
  title: "Titico Textiles",
  description: "Titico Textiles is one of the largest exporter of silk fabric in varanasi",
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
        className={`${montserrat.variable} ${poppins.variable} ${tangerine.variable} ${dancing.variable} ${playfair.variable} ${yeseva.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
          <BG />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
