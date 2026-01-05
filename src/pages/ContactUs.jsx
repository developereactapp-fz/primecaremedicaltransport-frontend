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
      <Seo
        title="Contact PrimeCare Medical Transport | Book a Ride Today"
        description="Contact PrimeCare Medical Transport for safe, reliable non-emergency medical transportation. Call, email, or book an appointment today."
      />

      {/* HERO */}
      <section
        // ref={sectionRef}
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

      <ContactHeader />
      <ContactAppointment />
    </>
  );
}
