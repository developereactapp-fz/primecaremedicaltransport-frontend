import "./ContactHeader.css";
import { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function ContactInfo() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="contact-info">
      <div className="container">

        {/* HEADER */}
        <div className="contact-info-header">
          <span className="contact-tag">Book With Us Now</span>
          <h2>Get an Appointment</h2>
          <p>
            Safe, reliable and compassionate non-emergency medical transportation
            tailored for your comfort.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="contact-info-grid">

          {/* LOCATION CARD */}
          <a
              href="https://www.google.com/maps/search/?api=1&query=5535+Charlotte+Ave+SE,+Auburn,+WA+98092"
              target="_blank"
              rel="noreferrer"
            className={`contact-card blue ${
              inView ? "animate-up-ontime" : ""
            }`}
          >
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <h4>Location</h4>
            <p>
              5535 Charlotte Ave Se Auburn, WA 98092
            </p>
          </a>

          {/* PHONE CARD */}
          <a
            href="tel:(206) 456-6665"
            className={`contact-card green ${
              inView ? "animate-up-Reliable" : ""
            }`}
          >
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <h4>Phone</h4>
            <p>
              Call (206) 456-6665
            </p>
          </a>

          {/* EMAIL CARD */}
          <a href="mailto:primecare.tranportations@gmail.com"  
              className={`contact-card orange ${
              inView ? "animate-up-Serving" : ""
            }`}
          >
            <span className="icon">
              <FaEnvelope />
            </span>
            <h4>Email</h4>
            <p>
             Primecare.tranportations@gmail.com
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}
