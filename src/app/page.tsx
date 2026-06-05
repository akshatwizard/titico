import AdditionalDetails from "../components/additional_details";
import Ads from "../components/ads";
import CardSlider from "../components/card_slider";
// import Certificate from "../components/certificates";
import Collections from "../components/collections";
import ContactBanner from "../components/contact_banner";
import CtaBanner from "../components/cta_banner";
import Hero from "../components/hero";
// import ImageSlider from "../components/image_slider";
// import OurExpertise from "../components/our_expertise";
// import Sponsor from "../components/sponsor";
// import Testimonials from "../components/testimonials";
import View from "../components/view";
import WhyUs from "../components/why_us";

// ADD this before the default export
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Silk & Fabric Exporters from Varanasi, India",
  description:
    "Titico Textiles manufactures and exports jacquard, linen, mulberry silk, tussar, polyester and embroidery fabrics to 20+ countries. Est. 1978, Varanasi.",
  openGraph: {
    title: "Titico Textiles | Premium Fabric Exporters, Varanasi",
    description:
      "Manufacturer and exporter of premium silk, linen, jacquard and tussar fabrics from Varanasi, India. 45+ years of textile excellence.",
    url: "https://www.titicoexports.com",
  },
  alternates: {
    canonical: "https://www.titicoexports.com",
  },
};
export default function Home() {
  return (
    <main className="z-20">
      <Hero />
      <View />
      <CardSlider />
      {/* <Sponsor /> */}
      <Collections />
      {/* <ImageSlider /> */}
      <AdditionalDetails />
      <Ads />
      <CtaBanner />
      <WhyUs />
      {/* <OurExpertise /> */}
      {/* <Certificate /> */}
      {/* <Testimonials /> */}
      <ContactBanner />
    </main>
  );
}
