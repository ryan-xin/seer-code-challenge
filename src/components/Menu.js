import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = (props) => {
  const closeMenuHandler = () => {
    props.closeMenu(false);
  };
  
  return(
    <div className="menu-container">
      {/* Close button */}
      <div className="menu-close-icon" onClick={closeMenuHandler}>
        <img src="/close_icon.svg" alt="Close" />
      </div>
      {/* Nav links */}
      <div className="menu-container-content">
        <ul className="link text-color-white">
          <li>Why Seer</li>
          <li>Pricing</li>
          <li>Customer</li>
          <li className="current-nav-link">Blog</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="menu-horizontal-divider"></div>
      {/* CTA buttons */}
      <div className="menu-cta-buttons">
        <div>
          <span className="link text-color-secondary">Sign In</span>
        </div>
        <button className="button-primary">Get Started for Free</button>
      </div>
    </div>
  )
}

export default Menu;