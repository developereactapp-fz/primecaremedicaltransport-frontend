import { useEffect, useRef, useState } from "react";
import "./ContactAppointment.css";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaUserMd,
  FaHospital
} from "react-icons/fa";

import contactImg from "../../assets/AboutUS.webp";

export default function ContactAppointment() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* SCROLL ANIMATION */
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
    <section className="contact-appointment" ref={sectionRef}>
      {/* <div className="contact-header">
  <span className="contact-tag">Book With Us Now</span>

  <h2>Get an Appointment</h2>

  <p>
    Safe, reliable and compassionate non-emergency medical transportation
    tailored for your comfort.
  </p>
</div> */}
      <div className={`contact-grid ${visible ? "contact-show" : ""}`}>

        {/* LEFT – 6 GRID BG COLOR */}
        <div className="contact-left">
         

          <form className="appointment-form">

            <div className="form-group">
              <FaUser />
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <FaEnvelope />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="form-group">
              <FaHospital />
              <select>
                <option>Choose Department</option>
                <option>NEMT Services</option>
                <option>Wheelchair Transport</option>
                <option>Senior Care</option>
              </select>
            </div>

            <div className="form-group">
              <FaUserMd />
              <select>
                <option>Choose Doctor</option>
                <option>Assigned Medical Staff</option>
              </select>
            </div>

            <div className="form-group">
              <FaCalendarAlt />
              <input type="date" />
            </div>

            <div className="form-group">
              <FaPhoneAlt />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <button className="submit-btn">
              Make an Appointment
            </button>

          </form>
        </div>

        {/* RIGHT – 6 GRID FULL IMAGE */}
        <div
          className="contact-right"
          style={{ backgroundImage: `url(${contactImg})` }}
        />
      </div>
    </section>
  );
}
