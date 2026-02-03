import { useEffect, useState } from "react";
import "./MovingBanner.css";
import carImg from "../../assets/Van_Left_Side3_sm.avif";

export default function MovingBanner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="moving-banner">
      <div className="container moving-banner-grid">

        {/* LEFT – CAR (4 GRID) */}
        <div className="banner-car-wrap">
          <img
            src={carImg}
            alt="PrimeCare Medical Transport Vehicle"
            className={`banner-car ${animate ? "car-animate" : ""}`}
          />
        </div>

        {/* RIGHT – CONTENT (8 GRID) */}
        <div className="banner-content">
          <p>
            <strong>#1 Private Pay Patient and Senior Transportation Service Provider</strong>{" "}
            for Assisted Ambulatory, Wheelchair and Stretcher Transports for Patients,
            Elderly & Disabled. <strong>Non-Emergency</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
