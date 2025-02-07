import { NavLink } from 'react-router-dom';
import './Home.css';
export const Home = ()=>{
    return (
        <div className="homepage-container">
        <header className="hero-section">
          <h1>Welcome to MovieLix</h1>
          <p>Discover amazing features and explore endless possibilities.</p>
          <NavLink to={'/movies'}>
          <button className="cta-button">Watch Now</button>
          </NavLink>
        </header>
        <section className="features-section">
          <h2>Why Choose Us</h2>
          <div className="features">
          <div className="feature-card">
            <h3>Free and Reliable</h3>
            <p>Access a high-quality platform that offers seamless streaming services at no cost. Experience consistent performance with zero compromises on reliability.</p>
            </div>
            <div className="feature-card">
            <h3>Ad-Free Service</h3>
            <p>Enjoy uninterrupted entertainment with our completely ad-free experience. Stay focused on the content you love without any distractions or delays.</p>
            </div>
            <div className="feature-card">
            <h3>Wide Range of Movies</h3>
            <p>Explore an extensive library featuring movies from diverse genres and languages. Whether you prefer action, drama, or comedy, we have something for everyone.</p>
            </div>
        </div>
        </section>
      </div>
    );
}
