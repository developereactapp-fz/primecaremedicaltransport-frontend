import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovingBanner.css";
import carImg from "../../assets/Van_Left_Side3_sm.avif";

export default function MovingBanner() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // reset animation
    setAnimate(false);

    // trigger animation again
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]); // 🔑 runs on every route change

  return (
    <div className="moving-banner">
      <div className="container banner-grid">
        {/* CAR */}
        <div className={`car-wrapper ${animate ? "car-move" : ""}`}>
          <img src={carImg} alt="PrimeCare Medical Transport Vehicle" />
        </div>

        {/* TEXT */}
        <div className="banner-text">
          <p>
            #1 Private Pay Patient and Senior Transportation Service Provider for
            Assisted Ambulatory, Wheelchair and Stretcher Transports for
            Patients, Elderly & Disabled. <strong>Non-Emergency</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
