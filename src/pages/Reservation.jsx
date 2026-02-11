import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import "./AboutUS.css";
import heroImg from "../assets/about.jpg";
import BookingAppointment from '../components/BookingAppointment/BookingAppointment'
import ContactHeader from '../components/ContactHeader/ContactHeader'
import ContactMap from '../components/ContactMap/ContactMap'

export default function Reservation() {
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
        title="reservation PrimeCare Medical Transport | Book a Ride Today"
        description="reservation PrimeCare Medical Transport for safe, reliable non-emergency medical transportation. Call, email, or book an appointment today."
        url="https://primecaremedicaltransport.com/reservation"
        image="/reservation-preview.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "reservationPage",
          "name": "reservation PrimeCare Medical Transport",
          "url": "https://primecaremedicaltransport.com/reservation",
          "mainEntity": {
            "@type": "Organization",
            "name": "PrimeCare Medical Transport",
            "url": "https://primecaremedicaltransport.com",
            "reservationPoint": {
              "@type": "reservationPoint",
              "telephone": "+1-934-422-8012",
              "reservationType": "customer service",
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
          <h1>Reservation</h1>

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>–</span>
            <span>Reservation</span>
          </nav>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
    <ContactHeader />
    <BookingAppointment />
       <ContactMap />
    </>
  );
}
