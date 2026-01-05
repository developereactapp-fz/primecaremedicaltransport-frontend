import { useEffect, useRef, useState } from "react";
import "./NemtServices.css";
import {
  FaHospital,
  FaUserMd,
  FaProcedures,
  FaHeartbeat,
  FaXRay,
  FaWheelchair,
  FaCalendarCheck,
  FaHome,
  FaStethoscope,
  FaClinicMedical,
} from "react-icons/fa";

export default function NemtServices() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="nemt-section" ref={sectionRef}>
      <div className="container nemt-wrapper">

        {/* LEFT */}
        <div className={`nemt-left ${inView ? "nemt-left-animate" : ""}`}>
          <div className="nemt-content">
            <h2>Non-Emergency Medical Transportation (NEMT)</h2>

            <p>
              Elegant Care Transportation provides convenient, affordable, safe,
              comfortable and reliable transportation for individuals with
              special needs.
            </p>

            <p>
              Our courteous employees are dedicated to providing prompt and
              efficient transportation throughout Western Washington.
            </p>

            <p>
              We specialize in door-to-door assistance for seniors and patients.
            </p>
          </div>

          <div className="nemt-buttons">
            <a href="tel:2534999999" className="btn-red">(253) 499-9999</a>
            <a href="tel:2064566665" className="btn-dark">(206) 456-6665</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`nemt-right ${inView ? "nemt-right-animate" : ""}`}>
          <h3>Our Services List</h3>

          <div className="services-grid">
            <ul>
              <li><FaHospital /> Non-Emergency</li>
              <li><FaHospital /> Hospital Visits</li>
              <li><FaUserMd /> Doctor’s Appointments</li>
              <li><FaProcedures /> Hospital Discharge</li>
              <li><FaClinicMedical /> Adult Day Care</li>
              <li><FaClinicMedical /> Acute Care Facilities</li>
              <li><FaXRay /> Radiation Appointments</li>
              <li><FaHeartbeat /> Dialysis Appointments</li>
              <li><FaWheelchair /> Physical Therapy</li>
              <li><FaHeartbeat /> Pulmonary & Cardiac</li>
            </ul>

            <ul>
              <li><FaStethoscope /> Rehabilitation</li>
              <li><FaClinicMedical /> Nursing Facilities</li>
              <li><FaHome /> Assisted Living</li>
              <li><FaCalendarCheck /> Events</li>
              <li><FaHome /> Nursing Homes</li>
              <li><FaUserMd /> Dentist Visits</li>
              <li><FaCalendarCheck /> Pharmacy Trips</li>
              <li><FaProcedures /> Outpatient Surgery</li>
              <li><FaHeartbeat /> Chemotherapy</li>
              <li><FaCalendarCheck /> Appointments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
