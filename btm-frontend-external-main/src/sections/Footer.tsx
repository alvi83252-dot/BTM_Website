import React from 'react';
import './Contact/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container snap-start relative z-10 px-4 py-20 lg:px-8 ">
      <div className="footer-content">
        
        {/* 1. Logo Section */}
        <div className="footer-logo-section">
          <div className="logo-box">BU</div>
          <div className="logo-text">BTM</div>
        </div>

        {/* 2. Main Columns Section */}
        <div className="footer-links-wrapper">
          
          {/* Column 1: Contacts */}
          <div className="footer-column">
            <h3 className="footer-heading">Contacts</h3>
            <div className="footer-text">
              <p>Brunel University London</p>
              <p>Kingston Ln, London,</p>
              <p>Uxbridge UB8 3PH</p>
              <p style={{ marginTop: '15px' }}>+44 1895 266048</p>
              <p>btm@brunel.ac.uk</p>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div className="footer-column">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#service-container">What We Deliver</a></li>
              <li><a href="#our-people">Our People</a></li>
              <li><a href="#about-us">About us</a></li>
              <li><a href="#for-organisations">For Organisations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Insights */}
          <div className="footer-column">
            <h3 className="footer-heading">Insights</h3>
            <ul className="footer-list">
              <li><a href="#academic">Academic Excellence</a></li>
              <li><a href="#industry">Industry Partnership</a></li>
              <li><a href="#student">Student Development</a></li>
              <li><a href="#innovation">Innovation Focus</a></li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Copyright Section */}
        <div className="footer-bottom">
          <div className="divider"></div>
          <p className="copyright-text">
            &copy; 2024 Brunel Talent Marketplace. All Rights Reserved.
          </p>
          <div className="policy-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookie">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;