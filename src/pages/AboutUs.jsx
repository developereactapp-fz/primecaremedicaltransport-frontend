import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import "./AboutUS.css";

import AboutIntro from "../components/About/AboutIntro";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import BigClients from "../components/BigClients/BigClients";

import heroImg from "../assets/about.jpg";

export default function AboutUs() {
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
        title="About PrimeCare Medical Transport | Compassionate NEMT Services"
        description="PrimeCare Medical Transportation is committed to providing safe, reliable, and compassionate non-emergency medical transport for seniors and individuals with mobility needs."
        url="https://primecaremedicaltransport.com/about-us"
        image="/about-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About PrimeCare Medical Transport",
          "url": "https://primecaremedicaltransport.com/about-us",
          "mainEntity": {
            "@type": "MedicalBusiness",
            "name": "Prime Care Medical Transport",
            "description":
              "Non-emergency medical transportation provider offering wheelchair transport, hospital visits, and assisted mobility services.",
            "areaServed": {
              "@type": "Place",
              "name": "United States"
            }
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
          <h1>About Us</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>–</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <AboutIntro />
      <WhyChooseUs />
      <BigClients />
    </>
  );
}
