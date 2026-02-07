import { useEffect, useRef, useState } from "react";
import "./AnyTripSection.css";

import paymentIcon from "../../assets/CashCheckCC.png";
import equipmentImg from "../../assets/ServiceEquipmentAll.png";

export default function AnyTripSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* SCROLL REVEAL */
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
    <section className="anytrip-section" ref={sectionRef}>
      <div className="container">

        {/* TITLE */}
        <h2 className={`anytrip-title ${visible ? "reveal-up" : ""}`}>
          Any Trip. Any Time. Any Place.
        </h2>

        {/* EQUIPMENT IMAGE */}
        <div className={`anytrip-equipment ${visible ? "reveal-scale" : ""}`}>
          <img src={equipmentImg} alt="Medical mobility equipment" />
        </div>

        {/* LOWER GRID */}
        <div className="anytrip-grid">

          {/* LEFT – DIAMOND */}
          <div className={`anytrip-left ${visible ? "reveal-left" : ""}`}>
            <div className="diamond-box">
              <img src={paymentIcon} alt="Payment Methods Accepted" />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className={`anytrip-right ${visible ? "reveal-right" : ""}`}>
            <h3>
              Facilities, Families, Private, Public – Everyone is choosing PrimeCare.
            </h3>

            <p>
              Our services are open and available to everyone. Any person needing
              assisted ambulatory, wheelchair or stretcher transportation services
              can use PrimeCare for non-emergency medical transport.
            </p>

            <p>
              PrimeCare is the preferred provider for Case Managers, Social Services,
              Social Workers, Directors of Nursing, Transportation Coordinators,
              Activities Directors, Executive Directors, Clinical Directors,
              Nurse Managers, and private pay patients.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
