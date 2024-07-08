import React from 'react'
import '../pages/Home.css'

const Home = () => {
  return (
    <div className="homepage">
     <section className="hero">
      <div className="hero-content">
        <h1>Welcome to E-Learning Platform</h1>
        <p>Empower your learning journey with us</p>
        <a href="#features" className="cta-button">Get Started</a>
      </div>
    </section>
    <section className="values" id="values">
      <h2>Our Values</h2>
      <div className="values-list">
        <div className="value-item">Quality Education</div>
        <div className="value-item">Accessibility for All</div>
        <div className="value-item">Innovative Learning</div>
        <div className="value-item">Continuous Improvement</div>
      </div>
    </section>
      <section className="features" id="features">
      <h2>Our Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Interactive Courses</h3>
          <p>Engage with interactive content and activities.</p>
        </div>
        <div className="feature-item">
          <h3>Expert Instructors</h3>
          <p>Learn from industry experts with real-world experience.</p>
        </div>
        <div className="feature-item">
          <h3>24/7 Access</h3>
          <p>Access your courses anytime, anywhere.</p>
        </div>
        <div className="feature-item">
          <h3>Community Support</h3>
          <p>Join a community of learners and get support.</p>
        </div>
        <div className="feature-item">
          <h3>Certification upon Completion</h3>
          <p>Receive certificates to showcase your achievements.</p>
        </div>
      </div>
    </section>
      <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"This platform has transformed my learning experience!"</p>
          <span>- Student A</span>
        </div>
        <div className="testimonial-item">
          <p>"The courses are well-structured and very informative."</p>
          <span>- Student B</span>
        </div>
        <div className="testimonial-item">
          <p>"I love the flexibility and the community support."</p>
          <span>- Student C</span>
        </div>
      </div>
    </section>
        <footer className="footer" id="contact">
          <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
          <p>Contact us: info@elearning.com</p>
        </footer>
    </div>
  )
}

export default Home