import React from 'react';
import '../styles/testimonials.css';
import testimonial1 from '../assests/images/testimonial1.jpg';
import testimonial2 from '../assests/images/testimonial2.jpg';
import testimonial3 from '../assests/images/testimonial3.jpg';
import testimonial4 from '../assests/images/testimonial4.jpg';
import testimonial5 from '../assests/images/testimonial5.jpg';
import testimonial6 from '../assests/images/testimonial6.jpg';


const testimonialsData = [
  {
    name: "John Doe",
    picture: testimonial1, 
    rating: 5,
    description: "Printify has made my e-commerce journey smooth and easy. Their customer service is top-notch!"
  },
  {
    name: "Jane Smith",
    picture: testimonial2,
    rating: 4,
    description: "The variety of products and ease of use is why I chose Printify."
  },
  {
    name: "Neha",
    picture:  testimonial3,
    rating: 4,
    description: "We chose Printify because of their offerings as well as their incredible low prices. After several years, we'vs come to find that their customer service is also top notch."

  },

  { name: "Farhan",
    picture:  testimonial4, 
    rating: 5,
    description: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team"



  },

  {
    name: "Michael Brown",
    picture: testimonial5,
    rating: 5,
    description: "I love the quality of the products and the quick shipping options."
  },

  {
   
    name: "Emily Johnson",
    picture: testimonial6,
    rating: 5,
    description: "Amazing experience! Printify helped me scale my business efficiently."

  },
  
];

const Testimonials = () => {

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <div className="trusted-text">Trusted by over 8M sellers around the world</div>
        <div className="positive-experience">
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </div>
      </div>

      <div className="testimonials-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.picture} alt={testimonial.name} className="testimonial-picture" />
            <div className="testimonial-rating">{"★".repeat(testimonial.rating)}</div>
            <div className="testimonial-description">{testimonial.description}</div>
            <div className="testimonial-name">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
