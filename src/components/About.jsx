
import './About.css'; // Assuming you have a separate CSS file for styling

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality services/products to our customers.</p>
          <p>Our mission is to .</p>
          <p>Feel free to explore our website to learn more about what we offer and how we can help you.</p>

          <div className="buttons">
            <button>Faq</button>
            <button>Contact Us</button>
            <button>Blog</button>
          </div>
        </div>
        {/* <div className="about-image">
          <img src="about-image.jpg" alt="About Us" />
        </div> */}
      </div>
    </section>
  );
}

export default About;
