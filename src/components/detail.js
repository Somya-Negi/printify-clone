import React from 'react';
import image1 from '../assests/images/piggybank.jpg';
import image2 from '../assests/images/clothes.jpg';
import image3 from '../assests/images/rocket.jpg';
import '../styles/detail.css';

const Detail = () => {
 
    return (
        <div className="detail-container">
      <div className="detail-item">
        <img src={image1} alt="Detail 1" className="detail-image" />
        <p className="detail-heading">Higher Profits</p>
        <p className="detail-text">
            We provide some of the most competitive prices in the market, 
            as print providers consistently strive to earn your business through ongoing competition.
        </p>
      </div>
      <div className="detail-item">
        <img src={image2} alt="Detail 2" className="detail-image" />
        <p className="detail-heading">Best Item Selection</p>
        <p className="detail-text">
            With over 900 products and leading quality brands, you have the freedom to 
            select the perfect items for your business.
        </p>
      </div>
      <div className="detail-item">
        <img src={image3} alt="Detail 3" className="detail-image" />
        <p className="detail-heading">Robust Scaling</p>
        <p className="detail-text">
            Effortlessly manage busy holiday periods with our 
            extensive partner network and automated routing system.
        </p>
      </div>
    </div>
    )

}

export default Detail;