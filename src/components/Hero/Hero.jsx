// import { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/banner-right-img.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-dezvu">
      <div className="container hero-wrapper">
        {/* LEFT */}
        <div className="hero-left animate-left">
          
          <h2>Safe
            Reliable
            Transportation.</h2>

          {/* <h3>Safety, Quality, Professionalism</h3> */}
          <br />
          <h1>
            Hospital  <br />
            Discharge.

          </h1>

          <p>
            Healing continues beyond hospital doors.
            A step closer to recovery, a step back to home
          </p>

          <button
            className="help-btn"
            onClick={() => navigate("/about-us")}
          >
            Book Your Appointment</button>


          {/* <span className="hero-index">01.</span> */}
        </div>

        {/* RIGHT */}
        <div className="hero-right animate-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img src={heroImage} alt="Design Trend" />
            </div>

            <div className="hero-float-card animate-up">
              <p>
                {/* Safety, <br />
                <span>Professionalism,</span> <br />
                Quality. */}
                Admits, <br />
                <span>Discharges,</span> <br />
                Routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
