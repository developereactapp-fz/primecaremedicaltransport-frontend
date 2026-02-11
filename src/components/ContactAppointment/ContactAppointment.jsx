import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactAppointment.css";
// import contactImg from "../../assets/AboutUS.webp";
import ContactMap from "../ContactMap/ContactMap";

export default function ContactAppointment() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captchaToken: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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
  }, []);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 3000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!formData.name) e.name = "Full name required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      e.email = "Valid email required";
    if (!formData.message) e.message = "Message required";
    if (!formData.captchaToken) e.captcha = "Verify captcha";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ stops ? in URL
    setSubmitted(true);

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast("success", "Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
          captchaToken: "",
        });
        setSubmitted(false);
      } else {
        showToast("error", "Failed to send message");
      }
    } catch {
      showToast("error", "Server error");
    }
  };

  return (
    <>
      {/* TOAST */}
      <div className={`toast ${toast.type} ${toast.show ? "show" : ""}`}>
        {toast.message}
      </div>

      <section className="form-section" ref={sectionRef}>
        <div className={`form-grid ${visible ? "show" : ""}`}>
          <div className="form-left">
            <h2 className="animate contact-form-header">Contact Us</h2>

            {/* ✅ SINGLE FORM ONLY */}
            <form className="form-body" onSubmit={handleSubmit} noValidate>
              <div className="two-col">
                <div className="field animate">
                  <input
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label>Full Name</label>
                  <span className="underline" />
                  {submitted && errors.name && <small>{errors.name}</small>}
                </div>

                <div className="field animate">
                  <input
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label>Email Address</label>
                  <span className="underline" />
                  {submitted && errors.email && <small>{errors.email}</small>}
                </div>
              </div>

              <div className="field animate">
                <textarea
                  name="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                />
                <label>Your Message</label>
                <span className="underline" />
                {submitted && errors.message && (
                  <small>{errors.message}</small>
                )}
              </div>

              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(t) =>
                  setFormData({ ...formData, captchaToken: t })
                }
              />
              {submitted && errors.captcha && (
                <small>{errors.captcha}</small>
              )}

              {/* ✅ BUTTON (NO NESTED FORM) */}
              <button type="submit">Submit Message</button>
            </form>
          </div>

          {/* <div
            className="form-right animate"
            // style={{ backgroundImage: `url(${contactImg})` }}
          /> */}
          <ContactMap/>
        </div>
      </section>
    </>
  );
}
