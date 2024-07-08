// import React from 'react'
// import '../pages/About.css'
// const About = () => {
//   return (
//     <div className="about-container">
//     <h1>About Coredemy</h1>
//     <p>
//       Welcome to Coredemy, your number one source for quality online education. 
//       We are dedicated to providing you the best of learning experiences, with a focus on reliability, 
//       student-centered content, and cutting-edge resources.
//     </p>
//     <h2>Our Mission</h2>
//     <p>
//       Our mission is to deliver accessible and engaging education to learners all around the world. 
//       We strive to empower students by providing top-notch courses crafted by industry experts.
//     </p>
//     <h2>Why Choose Us?</h2>
//     <ul>
//       <li>Expert Instructors: Learn from industry professionals with years of experience.</li>
//       <li>Flexible Learning: Access courses anytime, anywhere, and on any device.</li>
//       <li>Comprehensive Resources: Gain access to a wealth of knowledge and learning materials.</li>
//       <li>Community Support: Join a community of learners and get support from peers and mentors.</li>
//     </ul>
//     <h2>Our Team</h2>
//     <p>
//       We are a team of passionate educators and professionals dedicated to making learning accessible and enjoyable for everyone.
//     </p>
//     <h2>Contact Us</h2>
//     <p>
//       If you have any questions or comments, please don’t hesitate to contact us. We are here to help you on your learning journey!
//     </p>
//   </div>
//   )
// }

// export default About

// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Coredemy</h1>
        <p>Your Gateway to Quality Online Education</p>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Coredemy, our mission is to provide accessible and engaging education to learners worldwide. 
            We aim to empower students by delivering top-notch courses crafted by industry experts, 
            ensuring a transformative learning experience.
          </p>
        </section>
        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Expert Instructors:</strong> Learn from professionals with extensive industry experience.</li>
            <li><strong>Flexible Learning:</strong> Access courses at your convenience, anytime and anywhere.</li>
            <li><strong>Comprehensive Resources:</strong> Utilize a wealth of knowledge and learning materials.</li>
            <li><strong>Community Support:</strong> Join a supportive community of learners and mentors.</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a passionate team of educators and professionals dedicated to making learning accessible and enjoyable. 
            Our team is committed to helping you achieve your educational goals.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or comments? We’d love to hear from you! Contact us at <a href="mailto:support@coredemy.com">support@coredemy.com</a> 
            or follow us on our social media channels.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
