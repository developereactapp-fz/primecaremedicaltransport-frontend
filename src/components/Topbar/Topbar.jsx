import "./Topbar.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-wrapper">

        {/* ================= LEFT GRID ================= */}

        {/* DESKTOP: ADDRESS INFO */}
        <div className="topbar-left desktop-only">
          <span>
           <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/search/?api=1&query=5535+Charlotte+Ave+SE,+Auburn,+WA+98092"
              target="_blank"
              rel="noreferrer"
            >
              5535 Charlotte Ave Se Auburn, WA 98092
            </a>          
          </span>
          <a href="mailto:primecare.transportations@gmail.com">
            <FaEnvelope /> Primecare.transportations@gmail.com
          </a>
          <span>
            <FaClock /> Open 24 Hours
          </span>
        </div>

        {/* MOBILE: SOCIAL ICONS */}
        <div className="topbar-social mobile-only">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* ================= RIGHT GRID ================= */}

        {/* DESKTOP: SOCIAL ICONS */}
        <div className="topbar-social desktop-only">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* MOBILE: CTA BUTTON */}
        <a
          href="tel:(425) 306-7882"
          className="topbar-cta mobile-only"
          aria-label="Call PrimeCare Medical Transport"
        >
          <FaPhoneAlt />
          Call (425) 306-7882
        </a>

      </div>
    </div>
  );
}
