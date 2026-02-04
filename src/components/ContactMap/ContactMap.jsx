import React from "react";
import "./ContactMap.css";

export default function ContactMap() {
  return (
    <div className="map-section">
      <iframe
        title="Prime Care Medical Transportation Location"
        src="https://www.google.com/maps?q=5535+Charlotte+Ave+SE,+Auburn,+WA+98092&output=embed"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
