import { useEffect, useRef, useState } from "react";
import "./HelpBusiness.css";
import mainImage from "../../assets/AboutUS.webp";
import bgImage from "../../assets/help-bg-img.jpg";
import rightIcon from "../../assets/help-right-icon.png";
import { useNavigate } from "react-router-dom";

export default function HelpBusiness() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="help-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container help-wrapper">

        {/* IMAGE + CARDS */}
        <div className={`help-left ${inView ? "animate-in" : ""}`}>
          <div className="circle-area">

            <div className="info-card top-left">
              <i className="fa-solid fa-thumbs-up"></i>
              <div>
                <strong>Unlimited Rides</strong>
                <span>Flexible Plans</span>
              </div>
            </div>

            <div className="info-card middle-right">
              <i className="fa-solid fa-users"></i>
              <div>
                <strong>15K+</strong>
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="info-card bottom-left">
              <i className="fa-solid fa-user-tie"></i>
              <div>
                <strong>Expert Team</strong>
                <span>Professional Staff</span>
              </div>
            </div>

            <div className="circle-image">
              <img src={mainImage} alt="CareHealth Transport" />
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className={`help-right ${inView ? "animate-in" : ""}`}>
          <img src={rightIcon} alt="CareHealth Icon" className="right-icon" />

          <h2>
            How can <span className="highlight">CareHealth</span> help your journey?
          </h2>

          <p>
            CareHealth Transport offers safe, comfortable and dependable
            non-emergency medical transportation for seniors and individuals
            with mobility challenges.
          </p>

          <p>
            Our professional team ensures door-to-door assistance, punctual
            service and compassionate care every step of the way.
          </p>

          <button className="help-btn" onClick={() => navigate("/about-us")}>
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
