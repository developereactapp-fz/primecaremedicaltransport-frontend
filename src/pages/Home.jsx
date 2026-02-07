import Seo from "../seo/Seo";
import Hero from "../components/Hero/Hero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import HelpBusiness from "../components/HelpBusiness/HelpBusiness";
import BigClients from "../components/BigClients/BigClients";
import AnyTripSection from "../components/AnyTripSection/AnyTripSection";
import OurFleet from "../components/OurFleet/OurFleet";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import NemtServices from "../components/NemtServices/NemtServices";
import Faq from "../components/Faq/Faq";

export default function Home() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Seo
        title="Non-Emergency Medical Transportation Services | PrimeCare Medical Transportation"
        Meta Description="Safe and reliable non-emergency medical transportation in Washington State. Wheelchair and ambulatory transport with professional, trained drivers."
        Keywords="NEMT Washington, wheelchair transportation, medical transportation Auburn WA, non-emergency transport, dialysis transportation, hospital"
        url="https://https://primecaremedicaltransport.com//"
        image="/home-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Prime Care Medical Transportation",
          "Meta Description":
            "Safe and reliable non emergency medical transportation in Washington State. Wheelchair and ambulatory transport with professional, trained drivers.",
          "description":
            "Non-emergency medical transportation services offering safe, reliable and compassionate care.",
          "url": "https://https://primecaremedicaltransport.com//",
          "telephone": "+1-XXX-XXX-XXXX",
          "areaServed": {
            "@type": "Place",
            "name": "United States"
          },
          "serviceType": [
            "Non-Emergency Medical Transportation",
            "Wheelchair Transport",
            "Hospital Appointments",
            "Dialysis Transportation",
            "Senior Medical Transport"
          ]
        }}
      />

      {/* ================= PAGE CONTENT ================= */}
      <Hero />
      <WhatWeDo />
      <HelpBusiness />
      <BigClients />
      <AnyTripSection />
      <OurFleet />
      <WhyChooseUs />
      <NemtServices />
      <Faq />

    </>
  );
}
