import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = (props) => {
  return(
    <footer className="footer">
      <div>
        <div>
          <img src="/seer_logo_white.png" alt="seer_logo" />
        </div>
        <div>
          <img src="/linkedin_icon.svg" alt="linkedin" />
          <img src="/facebook_icon.svg" alt="facebook" />
          <img src="/instagram_icon.svg" alt="instagram" />
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <p>&copy; Seer Data & Analytics 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;