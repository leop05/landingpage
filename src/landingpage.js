import React from "react";
import "./LandingPage.css";

function LandingPage({ title, subtitle, features, ctaText, onCTAClick }) {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="cta-button" onClick={onCTAClick}>
          {ctaText}
        </button>
      </header>

      
      <section className="features">
        <h2>Key IoT Features</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <img src={icon} alt={`${title} icon`} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default LandingPage;
