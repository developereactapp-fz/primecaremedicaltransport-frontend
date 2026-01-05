import { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";
import {
  FaHeart,
  FaUserTie,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

export default function WhyChooseUs() {
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
    <section className="why-section" ref={sectionRef}>
      <div className="container">

        <h2 className={`why-title ${inView ? "fade-up" : ""}`}>
          Why Choose Us
        </h2>

        <div className="why-grid">

          <div className={`why-item ${inView ? "fade-up delay-1" : ""}`}>
            <span className="why-icon"><FaHeart /></span>
            <div>
              <h3>Compassionate Care</h3>
              <p>Friendly, respectful service tailored to your needs.</p>
            </div>
          </div>

          <div className={`why-item ${inView ? "fade-up delay-2" : ""}`}>
            <span className="why-icon"><FaUserTie /></span>
            <div>
              <h3>Professional Drivers</h3>
              <p>Skilled, caring staff committed to your comfort.</p>
            </div>
          </div>

          <div className={`why-item ${inView ? "fade-up delay-3" : ""}`}>
            <span className="why-icon"><FaClock /></span>
            <div>
              <h3>On-Time Service</h3>
              <p>Punctual pickups for stress-free medical appointments.</p>
            </div>
          </div>

          <div className={`why-item ${inView ? "fade-up delay-4" : ""}`}>
            <span className="why-icon"><FaShieldAlt /></span>
            <div>
              <h3>Safety First</h3>
              <p>
                Regularly maintained vehicles and trained drivers ensure
                secure journeys.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
