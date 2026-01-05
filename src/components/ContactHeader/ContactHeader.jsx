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

        <p>Safe, reliable and compassionate non-emergency medical transportation
    tailored for your comfort.
        </p>
        </div>

        {/* CARD GRID */}
        <div className="contact-info-grid">
          <div
            className={`contact-card ${
              inView ? "animate-up-ontime" : ""
            }`}>
            <span className="icon blue">
              <FaMapMarkerAlt />
            </span>
            <h4>Location</h4>
            <p>
              HQ. 121 King Street, Melbourne<br />
              Victoria 3000 Australia.
            </p>
          </div>

          <div
            className={`contact-card ${
              inView ? "animate-up-Reliable" : ""
            }`}>
            <span className="icon green">
              <FaPhoneAlt />
            </span>
            <h4>Phone</h4>
            <p>
              +1 - 123 - 456 - 7890<br />
              +1 - 123 - 456 - 7890
            </p>
          </div>

<div
            className={`contact-card ${
              inView ? "animate-up-Serving" : ""
            }`}>            <span className="icon orange">
              <FaEnvelope />
            </span>
            <h4>Email</h4>
            <p>
              info@creativehub.com<br />
              support@creativehub.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
