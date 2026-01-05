import { useEffect, useRef, useState } from "react";
import "./BookRideCTA.css";
import { FaCheckCircle, FaStar } from "react-icons/fa";

export default function BookRideCTA() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bookride-wrapper ${inView ? "fade-up" : ""}`}
    >
      {/* TOP RATING BAR */}
      <div className="rating-bar">
        <div className="rating-left">
          <div className="dummy-logo">LOGO</div>

          <span className="rating-text">
            Based On <strong>4,50+ Reviews</strong>
          </span>
        </div>

        <div className="rating-right">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="score">(Trusted Score 4.9 / 5.0)</span>
        </div>
      </div>

      {/* MAIN CTA */}
      <div className="cta-box">
        {/* LEFT */}
        <div className="cta-left">
          <h2>Book Your Ride Today!</h2>
          <p>
            Schedule your ride online or call us to reserve your spot today!
          </p>

          <a href="tel:2064566665" className="cta-btn">
            (206) 456-6665
          </a>
        </div>

        {/* RIGHT */}
        <div className="cta-right">
          <ul>
            <li><FaCheckCircle /> Compassionate Care on the Move</li>
            <li><FaCheckCircle /> Your Trusted Partner in Accessible Transportation</li>
            <li><FaCheckCircle /> Safe, Reliable Rides When You Need Them Most</li>
            <li><FaCheckCircle /> Friendly and Professional Drivers</li>
            <li><FaCheckCircle /> Customized Solutions for Every Need</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
