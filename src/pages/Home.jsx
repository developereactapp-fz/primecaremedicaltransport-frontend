import Seo from "../seo/Seo";
import Hero from "../components/Hero/Hero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import HelpBusiness from "../components/HelpBusiness/HelpBusiness";
import BigClients from "../components/BigClients/BigClients";
import OurFleet from "../components/OurFleet/OurFleet";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import NemtServices from "../components/NemtServices/NemtServices";

export default function Home() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Seo
        title="Non-Emergency Medical Transportation Services | Elegant Care Transportation"
        description="Elegant Care Transportation provides safe, reliable non-emergency medical transportation including wheelchair transport, hospital visits, dialysis, and assisted mobility services."
        url="https://elegantcaretransportation.com/"
        image="/home-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Elegant Care Transportation",
          "description":
            "Non-emergency medical transportation services offering safe, reliable and compassionate care.",
          "url": "https://elegantcaretransportation.com/",
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
      <OurFleet />
      <WhyChooseUs />
      <NemtServices />
    </>
  );
}
