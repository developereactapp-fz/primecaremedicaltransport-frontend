import React from "react";
import "./Heros.css";
import { Link } from "react-router-dom";

import bgImage from "../../assets/banner-bg-image.jpg";
import rightImg1 from "../../assets/banner-right-img1.png";
import rightImg2 from "../../assets/banner-right-img2.png";
import rightImg3 from "../../assets/banner-right-img3.png";

const Heros = () => {
  return (
    <section
      className="heros"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="heros-container">
        {/* LEFT CONTENT */}
        <div className="heros-left">
          <p className="subtitle animate fade-up delay-1">
            <span className="line"></span>
            Perfect Solutions for Your Mind
          </p>

          <h1 className="animate fade-up delay-2">
            We Will Help You to
            <br />
            Understand & Solve
            <br />
            The Problems
          </h1>

          <p className="description animate fade-up delay-3">
            Doidunt eget semper nec ruam sed hendrerit morbi aeu felisiao
            augue pellentesque veniam morbi acer.
          </p>

          <div className="heros-buttons animate fade-up delay-4">
            <Link to="/contact" className="btn-primarly">
              Book Appointment
            </Link>

            <Link to="/about" className="btn-secondarly">
              Read More
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="heros-right">
          <div className="image-grid">

            <div className="img-box large animate fade-left delay-2">
              <img src={rightImg1} alt="therapy1" />
            </div>

            <div className="img-box small top animate fade-right delay-1">
              <img src={rightImg2} alt="therapy2" />
            </div>

            <div className="img-box small bottom animate fade-right delay-3">
              <img src={rightImg3} alt="therapy3" />
            </div>

            <div className="shape shape-white animate zoom-in delay-3"></div>
            <div className="shape shape-orange animate zoom-in delay-4"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Heros;