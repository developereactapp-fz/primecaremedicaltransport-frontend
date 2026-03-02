import "./OurFleet.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaUserFriends, FaSuitcase } from "react-icons/fa";

/* IMAGES */
import CorollaSE from "../../assets/carehealth/cars/CorollaSEHybrid.png";
import WheelchairVan from "../../assets/carehealth/cars/BestTransportation.png";
import Fransit from "../../assets/carehealth/cars/FordFransit.png";
import Corolla from "../../assets/carehealth/cars/Corolla.png";
import PriusPrime from "../../assets/carehealth/cars/PriusPrime.png";
import PriusV from "../../assets/carehealth/cars/PriusV.png";
import Sienna from "../../assets/carehealth/cars/Sienna.png";
import Prius from "../../assets/carehealth/cars/Prius.png";
import PriusPrimes from "../../assets/carehealth/cars/PriusPrimes.png";



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
      { threshold: 0.0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fleetData = [
    // { name: "Toyato Corolla SE Hrbrid", passengers: 2, luggage: 2, img: CorollaSE },
    { name: "Toyato Corolla SE Hrbrid", img: CorollaSE },
    { name: "Wheelchair Van", img: WheelchairVan },
    { name: "Ford Fransit",  img: Fransit },
    { name: "Toyota Corolla",  img: Corolla },
    { name: "Toyota Prius Prime", img: PriusPrime },
    { name: "Toyota Prius V", img: PriusV },
    { name: "Toyato Sienna",  img: Sienna },
    { name: "Toyato Prius",  img: Prius },
    { name: "Toyota Prius Prime",  img: PriusPrimes },
  ];

  return (
    <section ref={sectionRef} className="fleet-section">
      <div className="container">

        <div className={`fleet-header ${visible ? "fade-up" : ""}`}>
          <h2>Our Gallery</h2>
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

              {/* <ul className="fleet-meta">
                <li><FaUserFriends /> {item.passengers} Passengers</li>
                <li><FaSuitcase /> {item.luggage} Suitcases</li>
              </ul> */}

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
