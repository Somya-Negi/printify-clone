import React from 'react';
import printifyLogo from '../assests/images/Printify.png';
import '../styles/navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className='logo'>
                    <a href='/'>
                        <img src={printifyLogo} className="navbar-logo" alt="navbar-logo"/>
                    </a>
                </div>
            </div>

            <ul className="nav-links">
                <li><a href="/">Catalog</a></li>
                <li><a href="/">How it works</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Use-cases</a></li>
                <li><a href="/">Need help ?</a></li>
           </ul>

           <div className="nav-buttons">
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Sign up</button>
           </div>
        </nav>
    );
}

export default Navbar;