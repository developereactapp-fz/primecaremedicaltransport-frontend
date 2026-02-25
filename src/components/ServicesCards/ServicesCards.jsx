import { useEffect, useRef, useState } from "react";
import "./ServicesCards.css";

import {
  FaWheelchair,
  FaWalking,
  FaHospital,
  FaProcedures,
  FaDumbbell,
  FaUserMd,
  FaAmbulance,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    icon: <FaWheelchair />,
    title: "Wheelchair Transportation",
    desc: "Secure and ADA-compliant wheelchair transportation with trained drivers ensuring safe transfers and comfortable travel to medical appointments."
  },
  {
    icon: <FaWalking />,
    title: "Ambulatory Transportation",
    desc: "Reliable transportation for passengers who can walk independently but require assistance getting to and from healthcare facilities."
  },
  {
    icon: <FaHospital />,
    title: "Hospital Discharge Transportation",
    desc: "Safe and coordinated transport from hospital to home, rehabilitation centers, or care facilities with patient-focused support."
  },
  {
    icon: <FaProcedures />,
    title: "Dialysis Appointment Transportation",
    desc: "Scheduled and punctual round-trip transportation for dialysis patients with consistent and dependable service."
  },
  {
    icon: <FaDumbbell />,
    title: "Physical Therapy Transportation",
    desc: "Timely and stress-free transportation to physical therapy and rehabilitation sessions to support recovery progress."
  },
  {
    icon: <FaUserMd />,
    title: "Doctor Appointment Transportation",
    desc: "On-time transport for routine checkups, specialist visits, and outpatient medical consultations."
  },
  {
    icon: <FaAmbulance />,
    title: "Long-Distance Medical Transportation",
    desc: "Comfortable long-distance non-emergency medical transportation between cities or medical facilities."
  },
  {
    icon: <FaHandsHelping />,
    title: "Special Needs Transportation",
    desc: "Compassionate and professionally assisted transport services for individuals with disabilities or special care requirements."
  }
];

export default function ServicesCards() {
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
    <section ref={sectionRef} className="services-cards">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="services-header">
          <span>Our Services</span>
          <h2>What We Can Do Together</h2>
        </div>

        {/* CARDS */}
        <div className={`services-grids ${visible ? "show" : ""}`}>
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {/* <a href="/services">Read More →</a> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
