import { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "Where Should I Book A Ride To Right Now?",
    answer:
      "You can book a ride directly through our website, by phone, or by contacting our support team. We offer flexible scheduling for all non-emergency medical transportation needs."
  },
  {
    question: "What Key Themes Do I Explore In The One?",
    answer:
      "Our services focus on safety, comfort, reliability, and compassionate care for seniors, patients, and individuals with mobility challenges."
  },
  {
    question: "Would You Take The Test?",
    answer:
      "Our trained drivers and coordinators follow strict protocols to ensure each ride meets medical transportation standards."
  },
  {
    question: "How Do I Address Gender In The Book?",
    answer:
      "We provide respectful, inclusive service to all individuals, regardless of background or personal needs."
  },
  {
    question: "Where Should I Book A Ride To Right Now?",
    answer:
      "Booking is available online 24/7 or via phone during business hours for your convenience."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        {/* HEADER */}
        <div className="faq-header">
          <span className="faq-tag">Frequently Asked Questions</span>
          <h2>
            Finding your ride with us: <br />
            <span>Guide & FAQs</span>
          </h2>
        </div>

        {/* GRID */}
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
