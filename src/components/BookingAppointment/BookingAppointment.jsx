import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import "./BookingAppointment.css";
import contactImg from "../../assets/ContactUS.jpg";
import aboutImg from "../../assets/AboutUS.webp";
import about2Img from "../../assets/about.jpg";

export default function BookingAppointment() {
  const sectionRef = useRef(null);
  const dateInputRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [aboutImg, about2Img, contactImg];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupDateTime: "",
    pickupLocation: "",
    dropLocation: "",
    serviceType: "",
    notes: "",
    captchaToken: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const e = {};
    if (!formData.name) e.name = "Full name required";
    if (!/^[0-9]{10}$/.test(formData.phone))
      e.phone = "Valid phone number required";
    if (!formData.pickupDateTime)
      e.pickupDateTime = "Pickup date & time required";
    if (!formData.pickupLocation)
      e.pickupLocation = "Pickup location required";
    if (!formData.dropLocation)
      e.dropLocation = "Drop-off location required";
    if (!formData.serviceType) e.serviceType = "Select service type";
    if (!formData.captchaToken) e.captcha = "Please verify captcha";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    try {
      const res = await fetch(
        // "http://localhost:5000/api/booking", 
        "${process.env.REACT_APP_API_URL}/api/booking", 
        {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast("success", "Booking submitted successfully");
        setFormData({
          name: "",
          phone: "",
          pickupDateTime: "",
          pickupLocation: "",
          dropLocation: "",
          serviceType: "",
          notes: "",
          captchaToken: "",
        });
        setSubmitted(false);
      } else {
        showToast("error", "Booking failed");
      }
    } catch {
      showToast("error", "Server error");
    }
  };

  return (
    <>
      <div className={`toast ${toast.type} ${toast.show ? "show" : ""}`}>
        {toast.message}
      </div>

      <section className="form-section" ref={sectionRef}>

        {/* MOBILE BACKGROUND SLIDER */}
        <div className="mobile-slider">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`mobile-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="mobile-overlay"></div>
        </div>

        <div className={`form-grid ${visible ? "show" : ""}`}>

          {/* LEFT FORM */}
          <div className="form-left">
            <h2 className="animate booking-form-header">Book a Ride</h2>

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
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label>Phone Number</label>
                  <span className="underline" />
                  {submitted && errors.phone && <small>{errors.phone}</small>}
                </div>
              </div>

              <div className="two-col">
                <div className={`field date-field animate ${formData.pickupDateTime ? "has-value" : ""}`}>
                  <input
                    ref={dateInputRef}
                    type="datetime-local"
                    name="pickupDateTime"
                    value={formData.pickupDateTime}
                    onChange={handleChange}
                  />
                  <label>Pickup Date & Time</label>
                  <FaCalendarAlt
                    className="date-icon"
                    onClick={() => dateInputRef.current?.focus()}
                  />
                  <span className="underline" />
                  {submitted && errors.pickupDateTime && (
                    <small>{errors.pickupDateTime}</small>
                  )}
                </div>

                <div className={`field select-field animate ${formData.serviceType ? "has-value" : ""}`}>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="NEMT">NEMT</option>
                    <option value="Ambulatory">Ambulatory</option>
                    <option value="Wheelchair">Wheelchair</option>
                  </select>
                  <label>Service Type</label>
                  <FaChevronDown className="select-icon" />
                  <span className="underline" />
                  {submitted && errors.serviceType && (
                    <small>{errors.serviceType}</small>
                  )}
                </div>
              </div>

              <div className="field animate">
                <input
                  name="pickupLocation"
                  placeholder=" "
                  value={formData.pickupLocation}
                  onChange={handleChange}
                />
                <label>Pickup Location</label>
                <span className="underline" />
                {submitted && errors.pickupLocation && (
                  <small>{errors.pickupLocation}</small>
                )}
              </div>

              <div className="field animate">
                <input
                  name="dropLocation"
                  placeholder=" "
                  value={formData.dropLocation}
                  onChange={handleChange}
                />
                <label>Drop-off Location</label>
                <span className="underline" />
                {submitted && errors.dropLocation && (
                  <small>{errors.dropLocation}</small>
                )}
              </div>

              <div className="field animate">
                <textarea
                  name="notes"
                  placeholder=" "
                  value={formData.notes}
                  onChange={handleChange}
                />
                <label>Additional Notes (Optional)</label>
                <span className="underline" />
              </div>

              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(token) =>
                  setFormData({ ...formData, captchaToken: token })
                }
              />
              {submitted && errors.captcha && <small>{errors.captcha}</small>}

              <button type="submit">Submit Booking</button>

            </form>
          </div>

          {/* RIGHT DESKTOP SLIDER */}
          <div className="form-right animate">
            {slides.map((img, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
