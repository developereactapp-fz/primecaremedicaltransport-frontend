import { useEffect, useRef, useState } from "react";
import "./AboutStory.css";
import {
  FaCheckCircle,
} from "react-icons/fa";
import bgImage from "../../assets/aboutstorybg.avif";

export default function AboutStory() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState({ years: 0, rides: 0, clients: 0 });

  /* =========================
     INTERSECTION OBSERVER
  ========================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* =========================
     COUNTER ANIMATION
  ========================== */
  useEffect(() => {
    if (!show) return;

    const targets = { years: 25, rides: 15000, clients: 8000 };
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      setCount({
        years: Math.floor(progress * targets.years),
        rides: Math.floor(progress * targets.rides),
        clients: Math.floor(progress * targets.clients)
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [show]);

  return (
    <section
      ref={sectionRef}
      className={`about-story ${show ? "show" : ""}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="about-story-overlay">
        <h2 className="about-story-title stagger">ABOUT US</h2>

        {/* COUNTERS */}
        <div className="about-counters">
          <div className="counter stagger">
            <h3>{count.years}+</h3>
            <p>Years Experience</p>
          </div>
          <div className="counter stagger">
            <h3>{count.rides.toLocaleString()}+</h3>
            <p>Successful Rides</p>
          </div>
          <div className="counter stagger">
            <h3>{count.clients.toLocaleString()}+</h3>
            <p>Happy Clients</p>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="about-story-grid">
          {/* LEFT */}
          <div className="about-card light stagger">
            <p>
              We are in this industry to bring back compassion, care, dignity
              and respect to those placed in our lives. All of our employees
              are mission-driven servants who strive for excellence.
            </p>

            <p>
              PrimeCare was founded on service — from community outreach to
              medical missions — with a belief in serving people with heart.
            </p>

            <div className="about-highlight">
              LOCAL & RESPONSIVE <br />
              TIMELY & COMPASSIONATE
            </div>

            {/* <div className="about-btn-wrap">
  <a href="/about-us" className="about-btn">
    Learn More About PrimeCare
  </a>
</div> */}

          </div>

          {/* RIGHT */}
          <div className="about-card dark stagger">
            <p>
              Service is a <strong>SMILE</strong>, a welcoming <strong>WAVE</strong>,
              a gentle <strong>HANDSHAKE</strong>, and a warm <strong>HUG</strong>.
            </p>
          
          {/* TWO UL BLOCKS */}
            <ul className="about-ul">
              <li><FaCheckCircle /> Fully licensed and insured</li>
              <li><FaCheckCircle /> Professional, trained, background‑checked drivers</li>
              <li><FaCheckCircle /> Clean, sanitized vehicles</li>
              <li><FaCheckCircle /> On‑time guarantee</li>
              <li><FaCheckCircle />  Friendly customer service</li>
            </ul>

            <p className="quote">
              The greatest service to a human soul has always been kindness and recognition.
            </p>

            {/* <span className="author">— Richelle E. Goodrich</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
