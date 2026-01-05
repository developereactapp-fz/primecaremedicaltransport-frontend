import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import "./AboutUS.css";
import heroImg from "../assets/about.jpg";
import ServicesProcess from "../components/ServicesProcess/ServicesProcess";
import ServicesCards from "../components/ServicesCards/ServicesCards";

export default function Services() {
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
        title="Our Services | Non-Emergency Medical Transportation | PrimeCare"
        description="PrimeCare Medical Transport offers safe, reliable non-emergency medical transportation services including wheelchair transport, hospital visits, dialysis trips, and assisted mobility care."
        url="https://primecaremedicaltransport.com/services"
        image="/services-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Non-Emergency Medical Transportation Services",
          "provider": {
            "@type": "Organization",
            "name": "PrimeCare Medical Transport"
          },
          "areaServed": {
            "@type": "Place",
            "name": "United States"
          }
        }}
      />

      {/* ================= HERO ================= */}
      <section
        // ref={sectionRef}
        className={`page-hero ${inView ? "fade-up" : ""}`}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="page-hero-overlay">
          <h1>Our Services</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>–</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <ServicesCards />
      <ServicesProcess />
    </>
  );
}
