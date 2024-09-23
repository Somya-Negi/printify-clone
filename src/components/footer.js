import React from 'react';
import '../styles/footer.css'; 

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-links">
                <a href="/" className="footer-link">Intellectual Property Policy</a>
                <a href="/" className="footer-link">Terms of Service</a>
                <a href="/" className="footer-link">Privacy Policy</a>
                <a href="/" className="footer-link">Security</a>
            </div>
            <div className="footer-text">
                © 2024 Printify, Inc. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
