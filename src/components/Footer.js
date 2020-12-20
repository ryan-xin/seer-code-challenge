import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = (props) => {
  return(
    <footer className="footer">
      <div className="footer-icon-container">
        <div>
          <img className="footer-logo" src="/seer_logo_white@2x.png" alt="seer_logo" />
        </div>
        <div className="social-icon-container">
          <div className="social-icon">
            <img src="/linkedin_icon.svg" alt="linkedin" />
          </div>
          <div className="social-icon">
            <img src="/facebook_icon.svg" alt="facebook" />
          </div>
          <div className="social-icon">
            <img src="/instagram_icon.svg" alt="instagram" />
          </div>
        </div>
      </div>
      <div className="horizontal-divider"></div>
      <div className="footer-link-container">
        <div>
          <ul className="footer-link link-small text-color-white">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <span className="p-small text-color-white">&copy; Seer Data & Analytics 2020</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;