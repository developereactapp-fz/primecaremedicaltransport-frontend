import { useEffect, useRef, useState } from "react";
import "./AboutIntro.css";

import {
  FaUserMd,
  FaHandsHelping,
  FaWheelchair,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

import slide1 from "../../assets/AboutUS.webp";
import slide2 from "../../assets/process-left-img.jpg";
import slide3 from "../../assets/AboutUS.webp";

const images = [slide1, slide2, slide3];

export default function AboutIntro() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  /* =========================
     AUTO SLIDER (FADE)
  ========================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* =========================
     SCROLL ANIMATION
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-intro" ref={sectionRef}>
      <div className="about-bg-overlay" />

      <div className="container about-wrapper">

        {/* LEFT – AUTO SLIDER */}
        <div className={`about-left ${visible ? "show-left" : ""}`}>
          <div className="about-slider">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Medical Assistance"
                className={`slide ${i === active ? "active" : ""}`}
              />
            ))}

            <div className="quote-box">
              “Compassionate care and safe transportation for every journey.”
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={`about-right ${visible ? "show-right" : ""}`}>
          <span className="about-tag">About Us</span>

          <h2>
            Solving Problems That <br /> are Beyond your Control
          </h2>

          <p>
            PrimeCare Medical Transportation provides safe, respectful, and
            reliable non-emergency medical transport services.
          </p>

          <p>
            Our mission is to deliver comfort, dignity, and punctual care for
            every patient.
          </p>

          {/* TWO UL BLOCKS */}
          <div className="about-ul-grid">
            <ul className="about-ul">
              <li><FaUserMd /> Professional Medical Support</li>
              <li><FaWheelchair /> Assisted Mobility Services</li>
              <li><FaHandsHelping /> Door-to-Door Care</li>
            </ul>

            <ul className="about-ul">
              <li><FaClock /> On-Time Pickups</li>
              <li><FaShieldAlt /> Secure & Sanitized Vehicles</li>
              <li><FaHandsHelping /> Trusted Patient Care</li>
            </ul>
          </div>

          <a href="/reservation" className="about-btn">
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
}
