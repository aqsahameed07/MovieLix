import "./About.css";
export const About = ()=>{
    return (
        <div className="aboutpage-container">
      <header className="about-hero">
        <h1>About Us</h1>
        <p>
          We are committed to providing the best services and creating meaningful
          experiences for our users.
        </p>
      </header>
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
        MovieLix was founded to create a centralized platform for 
        movie enthusiasts to easily explore and discover films from 
        various genres and eras. Whether it’s the latest releases or timeless classics, 
        our mission is to simplify the way users access and engage with movies. We combine
        user-friendly features with a vast collection of films, ensuring an efficient and
        enjoyable browsing experience for our audience.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Quality</li>
          <li>Reliability</li>
        </ul>
      </section>
      <footer className="Contact-footer">
        <p>You can also contact us at contact@movielix.com</p>
      </footer>
    </div>
    );
}