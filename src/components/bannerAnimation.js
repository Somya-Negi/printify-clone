import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assests/workingwomen.json'; 

const Animation = () => {
  return (
    <div className="animation-container">
      <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Animation;