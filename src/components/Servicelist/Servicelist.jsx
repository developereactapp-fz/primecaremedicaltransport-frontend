import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Servicelist.css";
import serviceImg from "../../assets/process-left-img.jpg";

export default function ServiceArea() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`service-area ${visible ? "service-show" : ""}`}
    >
      <div className="container">

        {/* HEADER – SAME STYLE AS HOME */}
        <div className="service-header">
          <span className="section-tag">Service Coverage</span>
          <h2>How can CareHealth help your journey?</h2>
          <p>
            Safe, reliable, and compassionate non-emergency medical transportation
            across multiple service areas.
          </p>
        </div>

        {/* GRID */}
        <div className="service-grid">

          {/* LEFT */}
          <div className="service-left">
            <img src={serviceImg} alt="Service Area" />

            <div className="service-buttons">
              <a href="/contact-us" className="btn-red">
                Book a Ride
              </a>
              <a href="tel:+12064566665" className="btn-dark">
                (206) 456-6665
              </a>
            </div>
           
          </div>

          {/* RIGHT */}
          <div className="service-right">
                      <div className="service-icon">

             <FaMapMarkerAlt />
</div>
            <h3>
               <span className="highlight">Our Service</span> Area List
            </h3>

            <div className="service-lists">

              <ul>
                <li><FaCheckCircle /> Seattle</li>
                <li><FaCheckCircle /> Seatac</li>
                <li><FaCheckCircle /> Snohomish County</li>
                <li><FaCheckCircle /> Pierce County</li>
                <li><FaCheckCircle /> King County</li>
                <li><FaCheckCircle /> Bellevue</li>
                <li><FaCheckCircle /> Kent</li>
                <li><FaCheckCircle /> Renton</li>
              </ul>

              <ul>
                <li><FaCheckCircle /> Maple Valley</li>
                <li><FaCheckCircle /> Covington</li>
                <li><FaCheckCircle /> Tukwila</li>
                <li><FaCheckCircle /> Skyway</li>
                <li><FaCheckCircle /> White Center</li>
                <li><FaCheckCircle /> Des Moines</li>
                <li><FaCheckCircle /> Puyallup</li>
                <li><FaCheckCircle /> Woodinville</li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
