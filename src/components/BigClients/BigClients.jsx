import { useEffect, useRef, useState } from "react";
import "./BigClients.css";

/* DUMMY CLIENT LOGOS */
const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Shopify_logo_2018.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Slack_Technologies_Logo.svg",
];

export default function BigClients() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  /* COUNTERS */
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [rides, setRides] = useState(0);

  /* =====================
     SCROLL OBSERVER
  ===================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* =====================
     COUNTER LOGIC
  ===================== */
  useEffect(() => {
    if (!started) return;

    animateCount(setYears, 25, 1800);
    animateCount(setClients, 15000, 2500);
    animateCount(setRides, 13000, 2100);
  }, [started]);

  const animateCount = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(counter);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  return (
    <section ref={sectionRef} className="bigclients">
      <div className="container">

        {/* HEADER */}
        <div className="bigclients-header">
          <h2>Our Trusted Clients</h2>
          <p>
            We proudly partner with healthcare providers, senior living facilities,
            hospitals, and organizations who trust us for dependable medical transportation.
          </p>
        </div>

        {/* LOGOS */}
        <div className={`client-logos ${visible ? "logos-visible" : ""}`}>
          {clientLogos.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt="Client Logo" />
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className={`bigclients-stats ${visible ? "stats-visible" : ""}`}>
          <div className="stat-item">
            <h3>{years}+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-item">
            <h3>{clients.toLocaleString()}+</h3>
            <p>Satisfied Clients</p>
          </div>

          <div className="stat-item">
            <h3>{rides.toLocaleString()}+</h3>
            <p>Successful Transport Operations</p>
          </div>
        </div>

      </div>
    </section>
  );
}
