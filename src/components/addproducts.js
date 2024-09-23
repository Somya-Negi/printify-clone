import React, { useEffect, useRef } from 'react';
import '../styles/addproducts.css';
import image from '../assests/images/cloth-designs.jpg'; 
import Lottie from 'lottie-react';
import Animate from '../assests/design.json'; 

const AddProducts = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 } 
    );

    
    const containerEl = containerRef.current;
    const animationEl = animationRef.current;
    const textEl = textRef.current;


    if (containerEl) observer.observe(containerEl);
    if (animationEl) observer.observe(animationEl);
    if (textEl) observer.observe(textEl);

    
    return () => {
      if (containerEl) observer.unobserve(containerEl);
      if (animationEl) observer.unobserve(animationEl);
      if (textEl) observer.unobserve(textEl);
    };
  }, []);


  return (
    <div className="add-products-container" ref={containerRef}>
  
      <div className="add-products-shape">
    
        <div className="image-container">
          <img src={image} alt="Product" className="product-image" />
         
          <div className="animation-products-container" ref={animationRef}>
            <Lottie animationData={Animate} className="product-animation" />
          </div>
        </div>

        
        <div className="text-container"  ref={textRef}>
          <h2>Easily add designs to wide range of products</h2>
          <p className="products-text">
            With our seamless integration, adding products to your store is quick and easy.
            Get started with a few clicks and watch your business grow.
          </p>
          <p className="products-last-text">All products <i class="fa-solid fa-arrow-right"></i></p>
        </div>

        
        
      
      </div>
    </div>
  );
};

export default AddProducts;
