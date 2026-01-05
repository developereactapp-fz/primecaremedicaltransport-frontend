import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-content">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <p className="tagline">Perfect Solutions for Your Mind</p>
          <h1>
            We Will Help You To
            <br />
            Understand & Solve
            <br />
            The Problems
          </h1>
          <p className="desc">
            Open-source images used. Layout and UI exactly matched with client
            reference design.
          </p>

          <div className="buttons">
            <a href="/contact" className="btn primary">
              Book Appointment
            </a>
            <a href="/about" className="btn secondary">
              Read More
            </a>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="hero-images">
          <img src="https://images.unsplash.com/photo-1604881991720-f91add269bed" />
          <img src="https://images.unsplash.com/photo-1587502537745-84b86da1204f" />
          <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb" />
        </div>
      </div>
    </section>
  );
}
