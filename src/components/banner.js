import React from 'react';
import '../styles/banner.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Animation from './bannerAnimation'


const banner = () => {

 return(
    <div className="banner-section">

        <div className="banner-content">

            <div className="banner-heading">
            <h1>Create and sell custom items</h1>
            </div>


            <div className="banner-list">
            <ul className='banner-list-type'>
                <li><i className="fas fa-check"></i>100% Free to use</li>
                <li><i className="fas fa-check"></i>900+ Proucts with Great Quality</li>
                <li><i className="fas fa-check"></i>Largest global print network</li>
            </ul>
            </div>
            
            <div className="banner-buttons">
            <button className="start-banner-btn">Start For Free</button>
            <button className="work-banner-btn"><i class="fa-regular fa-circle-play"></i>How it works ?</button>
            </div>

            <div className="banner-last-section">
            <p className="banner-last-text">Trusted by over 8M sellers around the world</p>
            </div>
        
        </div>
        
        <div className="animation-container">
        <Animation />
        </div>


    </div>
 )

}

export default banner;