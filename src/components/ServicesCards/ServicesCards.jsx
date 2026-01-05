import { useEffect, useRef, useState } from "react";
import "./ServicesCards.css";

import {
  FaUserFriends,
  FaHandsHelping,
  FaBrain,
  FaWalking,
  FaUserShield,
  FaUsers
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserFriends />,
    title: "Non-Emergency Transport",
    desc: "Safe and reliable transportation for medical appointments and daily needs."
  },
  {
    icon: <FaHandsHelping />,
    title: "Wheelchair Assistance",
    desc: "Professional door-to-door wheelchair and mobility assistance."
  },
  {
    icon: <FaBrain />,
    title: "Special Needs Care",
    desc: "Compassionate transport for patients requiring extra attention."
  },
  {
    icon: <FaWalking />,
    title: "Rehabilitation Visits",
    desc: "Timely transport for therapy, rehab, and recovery appointments."
  },
  {
    icon: <FaUserShield />,
    title: "Senior Transportation",
    desc: "Comfortable and respectful services for elderly passengers."
  },
  {
    icon: <FaUsers />,
    title: "Group & Facility Transport",
    desc: "Transportation solutions for care homes and medical facilities."
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
