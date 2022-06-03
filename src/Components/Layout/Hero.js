import "../Layout/hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1 className="animated-title">
          <span>Gema</span>
          <span>Hernández</span>
          <span>Milián, </span>
          <span>PhD</span>
        </h1>
        <span class="subtitle">
          Bióloga marina especializada en ecología trófica y microplásticos
        </span>
      </div>
    </div>
  );
}
