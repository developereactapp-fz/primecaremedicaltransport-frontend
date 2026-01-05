import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import "./AboutUS.css";
import heroImg from "../assets/ContactUS.jpg";
import OurFleet from "../components/OurFleet/OurFleet";

export default function Fleet() {
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
        title="Our Fleet | PrimeCare Medical Transport Vehicles"
        description="Explore PrimeCare Medical Transport’s modern fleet of safe, comfortable, and wheelchair-accessible vehicles designed for reliable non-emergency medical transportation."
        url="https://primecaremedicaltransport.com/fleet"
        image="/fleet-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Non-Emergency Medical Transportation Fleet",
          "provider": {
            "@type": "Organization",
            "name": "PrimeCare Medical Transport"
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
          <h1>Our Fleet</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>–</span>
            <span>Fleet</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <OurFleet />
    </>
  );
}
