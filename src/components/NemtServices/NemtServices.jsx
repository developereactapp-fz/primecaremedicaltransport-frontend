import { useEffect, useRef, useState } from "react";
import "./NemtServices.css";
import {
  // FaHeartbeat,
  // FaXRay,
  // FaCalendarCheck,
  // FaHome,
  // FaStethoscope,
  // FaClinicMedical,
  FaWheelchair,
  FaWalking,
  FaHospital,
  FaProcedures,
  FaDumbbell,
  FaUserMd,
  FaAmbulance,
  FaHandsHelping,
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
              PrimeCareMedicalTransportations provides convenient, affordable, safe,
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
            <a href="tel:4253067882" className="btn-red">(425) 306-7882</a>
            {/* <a href="tel:4253067882" className="btn-dark">(425) 306-7882</a> */}
          </div>
        </div>

        {/* RIGHT */}
        <div className={`nemt-right ${inView ? "nemt-right-animate" : ""}`}>
          <h3>Our Services List</h3>

          <div className="services-grid">
            <ul>
              <li><FaWheelchair /> Wheelchair Transportation</li>
              <li><FaWalking /> Ambulatory Transportation</li>
              <li><FaHospital />Hospital Discharge Transportation</li>
              <li><FaProcedures />Dialysis Appointment Transportation</li>
                            <li><FaDumbbell /> Physical Therapy Transportation</li>
              <li><FaUserMd />Doctor Appointment Transportation</li>
              <li><FaAmbulance />Long-Distance Medical Transportation</li>
              <li><FaHandsHelping />Special Needs Transportation</li>
              {/* <li><FaHospital /> Non-Emergency</li>
              <li><FaHospital /> Hospital Visits</li>
              <li><FaClinicMedical /> Adult Day Care</li>
              <li><FaClinicMedical /> Acute Care Facilities</li>
              <li><FaXRay /> Radiation Appointments</li>
              <li><FaHeartbeat /> Pulmonary & Cardiac</li>
              <li><FaHome /> Nursing Homes</li>
              <li><FaCalendarCheck /> Appointments</li> */}
            </ul>

            {/* <ul>
              
              <li><FaDumbbell /> Physical Therapy Transportation</li>
              <li><FaUserMd />Doctor Appointment Transportation</li>
              <li><FaAmbulance />Long-Distance Medical Transportation</li>
              <li><FaHandsHelping />Special Needs Transportation</li>
              <li><FaStethoscope /> Rehabilitation</li>
              <li><FaClinicMedical /> Nursing Facilities</li>
              <li><FaHome /> Assisted Living</li>
              <li><FaHeartbeat /> Chemotherapy</li>
              <li><FaCalendarCheck /> Events</li>
              <li><FaUserMd /> Dentist Visits</li>
              <li><FaCalendarCheck /> Pharmacy Trips</li>
              <li><FaProcedures /> Outpatient Surgery</li>

            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}
