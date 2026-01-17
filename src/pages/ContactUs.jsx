import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import "./AboutUS.css";
import heroImg from "../assets/ContactUS.jpg";

import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactAppointment from "../components/ContactAppointment/ContactAppointment";

export default function ContactUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Seo
        title="Contact PrimeCare Medical Transport | Book a Ride Today"
        description="Contact PrimeCare Medical Transport for safe, reliable non-emergency medical transportation. Call, email, or book an appointment today."
        url="https://primecaremedicaltransport.com/contact-us"
        image="/contact-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact PrimeCare Medical Transport",
          "url": "https://primecaremedicaltransport.com/contact-us",
          "mainEntity": {
            "@type": "Organization",
            "name": "PrimeCare Medical Transport",
            "url": "https://primecaremedicaltransport.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-934-422-8012",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["English"]
            }
          }
        }}
      />

      {/* ================= HERO ================= */}
      <section
        className={`page-hero ${inView ? "fade-up" : ""}`}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="page-hero-overlay">
          <h1>Contact Us</h1>

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>–</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <ContactHeader />
      <ContactAppointment />
    </>
  );
}
