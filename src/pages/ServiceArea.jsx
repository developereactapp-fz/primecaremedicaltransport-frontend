import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import "./AboutUS.css";

import heroImg from "../assets/about.jpg";
import Servicelist from "../components/Servicelist/Servicelist";

export default function ServiceArea() {
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
        title="Medical Transportation Services List | PrimeCare"
        description="Explore PrimeCare Medical Transport’s complete list of non-emergency medical transportation services including wheelchair transport, dialysis trips, hospital visits, assisted mobility, and senior care."
        url="https://primecaremedicaltransport.com/service-list"
        image="/services-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Medical Transportation Services",
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
        ref={sectionRef}
        className={`page-hero ${inView ? "fade-up" : ""}`}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="page-hero-overlay">
          <h1>Service List</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>–</span>
            <span>Service List</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <Servicelist />
    </>
  );
}
