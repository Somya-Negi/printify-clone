import React from 'react';
import '../styles/tags.css'; 
import tag1 from  '../assests/images/tag1.jpg';
import tag2 from  '../assests/images/tag2.jpg';
import tag3 from  '../assests/images/tag3.jpg';

const Tags = () => {
  return (
    <div className="tags-container">
      <div className="tag-box">
        <img src={tag1} className="tag-image" alt="tags-image"/>
        <p className="tag-text">Custom Products</p>
      </div>
      <div className="tag-box">
        <img src={tag2}  className="tag-image" alt="tags-image"/>
        <p className="tag-text">Sell On Your Terms</p>
      </div>
      <div className="tag-box">
        <img src={tag3}  className="tag-image" alt="tags-image"/>
        <p className="tag-text">We handle</p>
      </div>
    </div>
  );
}

export default Tags;
