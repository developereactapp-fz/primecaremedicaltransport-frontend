import "./Header.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import Logo from "../../assets/primecareLogo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for sticky background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-wrapper">
        {/* LOGO */}
        <div className="logo">
          <NavLink to="/" aria-label="Prime Care Home">
            <img
              src={Logo}
              alt="Prime Care Medical Transportation"
            />
          </NavLink>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav desktop-only">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/fleet">Our Fleet</NavLink>
          <NavLink to="/services">Services</NavLink>
          {/* <NavLink to="/service-areas">Service Areas</NavLink>
          <NavLink to="/reservation">Reservation</NavLink> */}
          <NavLink to="/contact-us">Contact Us</NavLink>
        </nav>

        {/* DESKTOP CTA */}
        <button
          className="header-cta desktop-only"
          onClick={() => (window.location.href = "tel:+919344228012")}
          aria-label="Call PrimeCare"
        >
          <FaPhoneAlt />  
          Call +91 9344228012
        </button>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon mobile-only" onClick={() => setOpen(true)}>
          <FaBars />
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span>CareHealth</span>
          <FaTimes className="close-icon" onClick={() => setOpen(false)} />
        </div>

        <div className="mobile-menu-links">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about-us" onClick={() => setOpen(false)}>About Us</NavLink>
          <NavLink to="/fleet" onClick={() => setOpen(false)}>Our Fleet</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          {/* <NavLink to="/service-areas" onClick={() => setOpen(false)}>Service Areas</NavLink>
          <NavLink to="/reservation" onClick={() => setOpen(false)}>Reservation</NavLink> */}
          <NavLink to="/contact-us" onClick={() => setOpen(false)}>Contact Us</NavLink>
        </div>
      </div>
    </header>
  );
}
