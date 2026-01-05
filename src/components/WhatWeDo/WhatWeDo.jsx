import { useEffect, useRef, useState } from "react";
import "./WhatWeDo.css";

export default function WhatWeDo() {
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
    <section ref={sectionRef} className="whatwedo">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="whatwedo-header">
          <h2>What We Do</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* SERVICES */}
        <div className="whatwedo-grid">
          {/* ITEM 1 */}
          <div
            className={`whatwedo-item ${
              inView ? "animate-up-ontime" : ""
            }`}
          >
            <i className="fa-solid fa-car-side servicee-icon"></i>
            <h3>On-Time</h3>
            <p>
              On-Time, Professional Transport for Medical Appointments,
              Therapy, and Assisted Living Needs.
            </p>
          </div>

          {/* ITEM 2 */}
          <div
            className={`whatwedo-item ${
              inView ? "animate-up-Reliable" : ""
            }`}
          >
            <i className="fa-solid fa-tag servicee-icon"></i>
            <h3>Reliable</h3>
            <p>
              Reliable Non-Emergency Medical Transportation, Putting
              Your Comfort and Safety First.
            </p>
          </div>

          {/* ITEM 3 */}
          <div
            className={`whatwedo-item ${
              inView ? "animate-up-Serving" : ""
            }`}
          >
            <i className="fa-solid fa-screwdriver-wrench servicee-icon"></i>
            <h3>Serving</h3>
            <p>
              Serving Western Washington with Compassionate and Accessible
              Transportation Solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
