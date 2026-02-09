import { useEffect, useRef, useState } from "react";
import "./AnyTripSection.css";
import paymentIcons from "../../assets/CashCheckCC.png"; // cash / check / card image
import equipmentImg from "../../assets/ServiceEquipmentAll.png"; // wheelchair, stretcher etc (optional)

export default function AnyTripSection() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="anytrip-section">
      <div className="container anytrip-grid">

        {/* LEFT – PAYMENT DIAMOND */}
        <div className={`anytrip-left ${visible ? "reveal-left" : ""}`}>
          <div className="payment-diamond">
            <div className="payment-inner">
              <span className="payment-top-text">we accept</span>

              <img
                src={paymentIcons}
                alt="Cash Check Credit Card Accepted"
                className="payment-icons"
              />

              <span className="payment-bottom-text">
                Cash • Check • Credit Card
                <small>at time of service</small>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={`anytrip-right ${visible ? "reveal-right" : ""}`}>
          <h2 className="anytrip-title">
            Any Trip. Any Time. Any Place.
          </h2>

          <p className="anytrip-desc">
            Facilities, Families, Private, Public — everyone is choosing PrimeCare.
            Our services are open and available to anyone needing assisted ambulatory,
            wheelchair or stretcher transportation for non-emergency medical transport.
          </p>

          {/* OPTIONAL IMAGE ROW */}
          {equipmentImg && (
            <img
              src={equipmentImg}
              alt="Medical transport equipment"
              className="anytrip-equipment"
            />
          )}
        </div>

      </div>
    </section>
  );
}
