import React from 'react';
import '../styles/links.css';
import printifylogo from '../assests/images/Printify.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Links = () => {

    return (
      <div className="links-section">

       <div className="main-logo">
        <img src={printifylogo} className="links-logo"/>
       </div>

       <div className="icons-logo">
            <i class="fa-brands fa-facebook links-icons" ></i>
            <i class="fa-brands fa-instagram links-icons" ></i>
            <i class="fa-brands fa-linkedin links-icons" ></i>
            <i class="fa-brands fa-x-twitter links-icons"></i>
            <i class="fa-brands fa-youtube links-icons"  ></i>
            <i class="fa-brands fa-tiktok links-icons" ></i>
            <i class="fa-brands fa-reddit links-icons"  ></i>
        </div>
      
      </div>
    );
}

export default Links;