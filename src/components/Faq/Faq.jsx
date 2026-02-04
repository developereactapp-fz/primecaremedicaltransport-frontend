import { useState, useEffect, useRef } from "react";
import "./Faq.css";

const faqData = [
   {
    question: "What services do you provide?",
    answer:
      "We offer wheelchair transportation, ambulatory transportation, hospital discharge rides, dialysis trips, therapy appointments, and long‑distance NEMT services."
  },

 {
    question: "Do you accept last‑minute bookings?",
    answer:
      "Yes, based on availability. We recommend scheduling in advance to guarantee your preferred time."
  },

 {
    question: "Are your vehicles wheelchair accessible?",
    answer:
      "Yes. Our vehicles are equipped with ADA‑compliant wheelchair lifts and securement systems."
  },

 {
    question: "Are your drivers trained?",
    answer:
      "All drivers undergo background checks, safety training, CPR/First Aid certification, and NEMT‑specific training."
  },

 {
    question: "Do you provide round‑trip transportation",
    answer:
      "Yes. We can wait during your appointment or return at a scheduled time."
  },

 {
    question: "What areas do you serve?",
    answer:
      "We serve King, Pierce, Thurston, Snohomish, and surrounding Washington counties."
  },

 {
    question: "How do I pay?",
    answer:
      "We accept cash, card, or invoicing depending on the service type."
  },

 {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations must be made at least 24 hours in advance to avoid fees."
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  /* =====================
     SINGLE ACTIVE ITEM
  ===================== */
  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {/* CLICK AREA */}
              <button
                type="button"
                className="faq-question"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
              >
                <h4>{item.question}</h4>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
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
