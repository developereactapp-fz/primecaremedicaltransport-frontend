import { useEffect, useRef, useState } from "react";
import "./TransportCoverage.css";
// import centerLogo from "../../assets/logocircle.avif";
import centerLogo from "../../assets/mainlogo.png";

export default function TransportCoverage() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* COUNTERS */
  const [timelyCount, setTimelyCount] = useState(0);
  const [leisureCount, setLeisureCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* COUNTER ANIMATION */
  useEffect(() => {
    if (!visible) return;

    let t = 0;
    let l = 0;

    const timelyInterval = setInterval(() => {
      t += 1;
      setTimelyCount(t);
      if (t >= 28) clearInterval(timelyInterval);
    }, 30);

    const leisureInterval = setInterval(() => {
      l += 1;
      setLeisureCount(l);
      if (l >= 15) clearInterval(leisureInterval);
    }, 45);

    return () => {
      clearInterval(timelyInterval);
      clearInterval(leisureInterval);
    };
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className={`coverage-section ${visible ? "coverage-show" : ""}`}
    >
      <div className="container coverage-container">

        {/* INTRO */}
        <p className="coverage-intro">
          As you can see, PrimeCareMedicalTransportations is at the center of all things related to
          wheelchair, stretcher and assisted transportation.
        </p>

        <div className="coverage-grid">

          {/* LEFT */}
          <div className="coverage-column">
            <h3>
              Timely Transportation
              <span className="count">({timelyCount}+) </span>
            </h3>

            <ul>
              {[
                "Hospitals",
                "Rehab and Skilled Nursing Facilities",
                "Nursing and Healthcare Facilities",
                "Out-Patient Surgery",
                "Local Clinics",
                "Doctors Offices",
                "Appointments",
                "Rehabilitation",
                "Physical Therapy",
                "Check-Ups",
                "Sleep Studies",
                "Pharmacy Trips",
                "Legal Consultations",
                "Eye Exams",
                "X-rays",
                "Cardiologist",
                "Gastroenterologist",
                "Internal Medicine",
                "Oral Surgeon",
                "Neurologist",
                "Nuclear Medicine",
                "Oncologist",
                "Ophthalmologist",
                "Orthopedic",
                "Plastic Surgeon",
                "Radiologist",
                "Urologist",
                "just to name a few…"
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className={visible ? "bullet-show" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER */}
          <div className="coverage-center">
            <div className="logo-circle">
              <img src={centerLogo} alt="PrimeCare Transport Services" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="coverage-column">
            <h3>
              Leisure Transportation
              <span className="count">({leisureCount}+) </span>
            </h3>

            <ul>
              {[
                "Church",
                "Graduation",
                "Reunion",
                "Movie / Play",
                "Venues / Events",
                "Funeral",
                "Wedding",
                "Baby Shower",
                "Hair Appointment",
                "Legal Consultations",
                "Depositions",
                "Financial Institutions",
                "Airport",
                "Luncheons",
                "just to name a few…"
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className={visible ? "bullet-show" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
