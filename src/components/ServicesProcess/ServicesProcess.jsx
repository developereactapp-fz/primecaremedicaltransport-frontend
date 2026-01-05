import { useEffect, useRef, useState } from "react";
import "./ServicesProcess.css";

import processImg from "../../assets/process-left-img.jpg";
import icon1 from "../../assets/process-icon1.png";
import icon2 from "../../assets/process-icon2.png";
import icon3 from "../../assets/process-icon3.png";

const steps = [
  {
    icon: icon1,
    title: "Talk to Us First",
    desc: "Our care coordinators listen carefully and understand your transportation needs."
  },
  {
    icon: icon2,
    title: "Book an Appointment",
    desc: "Schedule rides easily with flexible pickup times and locations."
  },
  {
    icon: icon3,
    title: "Ride With Us",
    desc: "Safe, comfortable, and on-time transport with trained drivers."
  }
];

export default function AboutProcess() {
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
    <section ref={sectionRef} className="about-process">
      <div className="container process-wrapper">

        {/* LEFT IMAGE */}
        <div className={`process-left ${visible ? "left-show" : ""}`}>
          <img src={processImg} alt="Therapy Session" />
        </div>

        {/* RIGHT CONTENT */}
        <div className={`process-right ${visible ? "right-show" : ""}`}>
          <span className="process-tag">How It Works</span>

          <h2>
            Professional Psychology <br />
            Therapy You Can Choose
          </h2>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-item ${
                  index === steps.length - 1 ? "last" : ""
                }`}
              >
                <div className="icon-wrapper">
                  <div className="icon-circle">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  {index !== steps.length - 1 && (
                    <span className="icon-line"></span>
                  )}
                </div>

                <div className="process-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/reservation" className="process-btn">
            Book Appointment
          </a>
        </div>

      </div>
    </section>
  );
}
