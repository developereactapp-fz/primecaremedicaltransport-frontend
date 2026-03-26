import "./BookingHeader.css";
import { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import Slideone from "../../assets/carehealth/BestTransportation.png";
import Slidetwo from "../../assets/carehealth/doctor_help.jpeg";
import Slidethree from "../../assets/carehealth/doctor_help_bg.png";
import Slidefour from "../../assets/carehealth/wheelchair_alone.jpeg";

export default function BookingHeader() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [Slideone, Slidetwo, Slidethree, Slidefour];

  /* Scroll animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Auto slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section ref={sectionRef} className="booking-section">

      <div className="booking-wrapper">

        {/* LEFT SIDE */}
        <div className="booking-left">

          <div className="booking-info-header">
            <span className="booking-tag">BOOK WITH US NOW</span>
            <h2>Get an Appointment</h2>
            <p>
              Safe, reliable and compassionate non-emergency medical transportation
              tailored for your comfort.
            </p>
          </div>

          <div className="booking-info-grid">

            <a
              href="https://www.google.com/maps/search/?api=1&query=5535+Charlotte+Ave+SE,+Auburn,+WA+98092"
              target="_blank"
              rel="noreferrer"
              className={`booking-card blue ${
                inView ? "animate-up-ontime" : ""
              }`}
            >
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="card-content">
                <h4>Location</h4>
                <p>
                  5535 Charlotte Ave Se Auburn, WA 98092
                </p>
              </div>
            </a>

            <a
              href="tel:(206) 456-6665"
              className={`booking-card green ${
                inView ? "animate-up-Reliable" : ""
              }`}
            >
              <div className="card-icon">
                <FaPhoneAlt />
              </div>
              <div className="card-content">
                <h4>Phone</h4>
                <p>
                  Call (206) 456-6665
                </p>
              </div>
            </a>

            <a href="mailto:dispatch@primecaretransportations.com"  
              className={`booking-card orange ${
              inView ? "animate-up-Serving" : ""
            }`}
          >
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <div className="card-content">
                <h4>Email</h4>
                <p>
                  Dispatch@primecaretransportations.com
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - SLIDER */}
        <div className="booking-slider">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <img key={index} src={slide} alt="slide" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
