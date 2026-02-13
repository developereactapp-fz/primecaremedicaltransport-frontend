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
          Prime Care Medical Transportation LLC is dedicated to providing safe, reliable, and compassionate non‑emergency medical transportation that empowers individuals with mobility challenges to access essential healthcare with dignity, comfort, and respect. Our mission is to serve our community with professionalism, integrity, and unwavering commitment to care.  
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
            <i className="fa-solid fa-car-side wedo-service-icon"></i>
            <h3>Warm & Caring</h3>
            <p>
              Compassion in Every Mile.<br></br> Caring Transportation You Can Trust.<br></br> Where Comfort Meets Care
            </p>
          </div>

          {/* ITEM 2 */}
          <div
            className={`whatwedo-item ${
              inView ? "animate-up-Reliable" : ""
            }`}
          >
            <i className="fa-solid fa-tag wedo-service-icon"></i>
            <h3>Professional & Reliable</h3>
            <p>
              Reliable Medical Transportation Every Time.<br></br> Your Trusted Partner in NEMT. <br></br>Safe, Professional, On Time.
            </p>
          </div>

          {/* ITEM 3 */}
          <div
            className={`whatwedo-item ${
              inView ? "animate-up-Serving" : ""
            }`}
          >
            <i className="fa-solid fa-screwdriver-wrench wedo-service-icon"></i>
            <h3>Modern & Clean</h3>
            <p>
              Moving Care Forward.<br></br> Accessible Transportation, Redefined.<br></br> Your Journey, Our Priority.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
