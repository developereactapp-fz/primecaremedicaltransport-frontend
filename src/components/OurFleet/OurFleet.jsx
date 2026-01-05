import "./OurFleet.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaSuitcase } from "react-icons/fa";

/* IMAGES */
import Tesla from "../../assets/Tesla-200x107.webp";
import WheelchairVan1 from "../../assets/Wheelchair-van-1-200x107.webp";
import WheelchairVan2 from "../../assets/Toyota-Camry-3-200x107.webp";
import Prius from "../../assets/Toyota-Prius-200x107.webp";
import Lincoln from "../../assets/Lincon-continental-200x107.webp";
import Camry from "../../assets/Toyota-Camry-200x107.webp";

export default function OurFleet() {
  const navigate = useNavigate();
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

  const fleetData = [
    { name: "Tesla", passengers: 2, luggage: 2, img: Tesla },
    { name: "Wheelchair Van", passengers: 5, luggage: 5, img: WheelchairVan1 },
    { name: "Wheelchair Van", passengers: 4, luggage: 4, img: WheelchairVan2 },
    { name: "Toyota Prius", passengers: 2, luggage: 2, img: Prius },
    { name: "Lincoln Continental", passengers: 3, luggage: 3, img: Lincoln },
    { name: "Toyota Camry", passengers: 2, luggage: 2, img: Camry },
  ];

  return (
    <section ref={sectionRef} className="fleet-section">
      <div className="container">

        <div className={`fleet-header ${visible ? "fade-up" : ""}`}>
          <h2>Our Fleet</h2>
          <p>
            Comfortable, reliable vehicles designed for non-emergency
            medical transportation.
          </p>
        </div>

        <div className="fleet-grid">
          {fleetData.map((item, index) => (
            <div
              key={index}
              className={`fleet-card ${visible ? "slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              <div className="fleet-image">
                <img src={item.img} alt={item.name} />
              </div>

              <h3>{item.name}</h3>

              <ul className="fleet-meta">
                <li><FaUserFriends /> {item.passengers} Passengers</li>
                <li><FaSuitcase /> {item.luggage} Suitcases</li>
              </ul>

              <button
                className="fleet-btn"
                onClick={() => navigate("/reservation")}
              >
                Book a Ride
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
