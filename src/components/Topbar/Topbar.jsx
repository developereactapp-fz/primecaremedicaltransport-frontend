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

        {/* DESKTOP LEFT */}
        <div className="topbar-left desktop-only">
          <a href="#"><FaMapMarkerAlt /> Baton Rouge, LA</a>
          <a href="#"><FaEnvelope /> support@primecare.com</a>
          <a href="#"><FaClock /> Open 24 Hours</a>
        </div>

        {/* MOBILE LEFT */}
        <div className="topbar-social mobile-only">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="topbar-social desktop-only">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        {/* MOBILE RIGHT */}
        {/* <button className="topbar-cta mobile-only">
          ride here
        </button> */}
{/* TOPBAR CTA */}
<button
  className="topbar-cta mobile-only"
  onClick={() => {
    window.location.href = "tel:+919344228012";
  }}
  aria-label="Call PrimeCare at +91 9344228012"
>
  <FaPhoneAlt style={{ marginRight: "6px", fontSize: "12px" }} />
  Call +91 9344228012
</button>
      </div>
    </div>
  );
}
