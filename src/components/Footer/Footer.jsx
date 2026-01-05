import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/primecareLogo.png";

export default function Footer() {
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer">

      {/* ===================== */}
      {/* TOP AREA */}
      {/* ===================== */}
      <div className="container footer-top">

        {/* BRAND */}
        <div className={`footer-col ${inView ? "footer-animate delay-1" : ""}`}>
          <NavLink to="/" className="footer-logo">
            <img src={Logo} alt="CareHealth Medical Transport" />
          </NavLink>

          <p>
            CareHealth Medical Transportation provides safe, reliable, and
            compassionate non-emergency medical transport services for seniors,
            patients, and individuals with special mobility needs.
          </p>

           {/* SOCIAL ICONS (external links must be valid URLs) */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={`footer-col ${inView ? "footer-animate delay-2" : ""}`}>
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/fleet">Our Fleet</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/service-areas">Service Areas</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          </ul>
        </div>

             {/* CONTACT INFO */}
        <div className="footer-col footer-animate delay-3">
          <h4>Contact Info</h4>

          <p>
            <FaMapMarkerAlt />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Baton Rouge, LA, United States
            </a>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:support@primecare.com">
              support@primecare.com
            </a>
          </p>

          <p>
            <FaPhoneAlt />
            <a href="tel:+919344228012">
              +91 93442 28012
            </a>
          </p>
        </div>

        {/* NEWSLETTER */}
        <div className={`footer-col newsletter ${inView ? "footer-animate delay-4" : ""}`}>
          <h4>Newsletter</h4>
          <p>Stay connected with CareHealth for updates & alerts.</p>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe →</button>
        </div>

      </div>

      {/* ===================== */}
      {/* BOTTOM BAR */}
      {/* ===================== */}
      <div className={`footer-bottom ${inView ? "footer-animate delay-5" : ""}`}>

        <div className="footer-bottom-links">
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy-policy">Privacy</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} CareHealth Medical Transport. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}
