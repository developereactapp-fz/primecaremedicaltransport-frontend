import { useState, useEffect, useRef } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "Where Should I Book A Ride To Right Now?",
    answer:
      "You can book a ride directly through our website, by phone, or by contacting our support team."
  },
  {
    question: "What Key Themes Do I Explore In The One?",
    answer:
      "We focus on safety, comfort, reliability, and compassionate non-emergency medical transportation."
  },
  {
    question: "Would You Take The Test?",
    answer:
      "Our drivers and coordinators follow strict protocols to ensure reliable and secure service."
  },
  {
    question: "How Do I Address Gender In The Book?",
    answer:
      "We provide inclusive, respectful services for every individual."
  },
  {
    question: "Where Should I Book A Ride To Right Now?",
    answer:
      "You can schedule online 24/7 or call us directly for assistance."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* =====================
     AUTO CLOSE LOGIC
  ===================== */
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* =====================
     SCROLL REVEAL
  ===================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`faq-section ${visible ? "faq-show" : ""}`}
    >
      <div className="container">

        {/* HEADER */}
        <div className="faq-header">
          <span className="faq-tag">Frequently Asked Questions</span>
          <h2>
            Finding your ride with us: <br />
            <span>Guide & FAQs</span>
          </h2>
        </div>

        {/* FAQ GRID */}
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h4>{item.question}</h4>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
