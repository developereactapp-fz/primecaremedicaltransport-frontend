// import { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/banner-right-img.png";
import { useNavigate } from "react-router-dom";

// const services = [
//   "UI / UX Design",
//   "Web Development",
//   "Brand Identity",
//   "Digital Marketing",
//   "Product Design"
// ];

export default function Hero() {
  const navigate = useNavigate();

  // const [text, setText] = useState("");
  // const [index, setIndex] = useState(0);
  // const [subIndex, setSubIndex] = useState(0);
  // const [deleting, setDeleting] = useState(false);

  // useEffect(() => {
  //   if (!deleting && subIndex === services[index].length) {
  //     setTimeout(() => setDeleting(true), 3000); // HOLD 3s
  //     return;
  //   }

  //   if (deleting && subIndex === 0) {
  //     setDeleting(false);
  //     setIndex((prev) => (prev + 1) % services.length);
  //     return;
  //   }

  //   const timeout = setTimeout(() => {
  //     setSubIndex((prev) => prev + (deleting ? -1 : 1));
  //     setText(services[index].substring(0, subIndex));
  //   }, deleting ? 60 : 120);

  //   return () => clearTimeout(timeout);
  // }, [subIndex, index, deleting]);

  return (
    <section className="hero-dezvu">
      <div className="container hero-wrapper">
        {/* LEFT */}
        <div className="hero-left animate-left">
          {/* <span className="hero-services">
            Our Services : <strong>{text}</strong>
            <span className="cursor">|</span>
          </span> */}

<h2>Safe
Reliable
Transportation.</h2> 

          {/* <h3>Safety, Quality, Professionalism</h3> */}
<br/>
          <h1>
                         Hospital  <br />
             Discharge.

          </h1>

          <p>
            Healing continues beyond hospital doors.
A step closer to recovery, a step back to home
          </p>

          <button
  className="help-btn"
  onClick={() => navigate("/about-us")}
>
Book Your Appointment</button>


          {/* <span className="hero-index">01.</span> */}
        </div>

        {/* RIGHT */}
        <div className="hero-right animate-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img src={heroImage} alt="Design Trend" />
            </div>

            <div className="hero-float-card animate-up">
              <p>
                 Safety, <br />
                <span>Professionalism,</span> <br />
                 Quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
