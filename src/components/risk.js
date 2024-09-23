import React from 'react';
import '../styles/risk.css'; 
import Lottie from 'lottie-react';
import investment from '../assests/investment.json';

const Risk = () => {
  return (
    <div className="risk-container">

      <div className="risk-content">

        <h2 className="risk-heading">Make Money, Risk-Free</h2>
        <p className="risk-text">
          Whether you are just starting or looking to scale, we offer solutions tailored to your business needs. Our platform ensures a smooth experience from product creation to customer delivery.
        </p>
        <button className="start-selling-button">Start Selling</button>
        <p className="risk-description">100% Free to use. 900+ Products · Largest print network</p>

            <div className="profit-calculation">
                <div className="profit-calculation-section">
                    <p className="profit-text">You sell a shirt:</p>
                    <p className="profit-rate">$30</p>
                </div>
            
                <div className="profit-calculation-section">
                    <p className="profit-text">You buy a shirt:</p> 
                    <p className="profit-rate">$12</p>
                </div>
            
                <hr />
            
                <div className="profit-calculation-section">
                    <p className="profit-text">Your profit:</p>
                    <p className="profit-rate">$18</p>
                </div>
            </div>
        </div>
    
      <div className="risk-animation">  
      <Lottie animationData={investment} loop={true} style={{ width: '100%', height: '100%' }} />
      </div>
  
    </div>

  );
};

export default Risk;
