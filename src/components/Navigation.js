import React, { useState } from 'react';
import Menu from './Menu';
import './Navigation.css';

const Navigation = (props) => {
  const [menuShow, setMenuShow] = useState(false);
  
  const controlMenuHandler = (value) => {
    setMenuShow(value);
  };
  
  return(
    <nav className="main-nav nav-container">
      {/* Logo section */}
      <div>
        <img
          className="nav-logo"
          src="./seer_logo_color@2x.png"
          alt="Seer logo"
        />
      </div>
      <div className="nav-link-container">
      
        {/* Navigation links */}
        <div className="nav-desktop">
          <ul className="nav-link link text-color-primary">
            <li>Why Seer</li>
            <li>Pricing</li>
            <li>Customer</li>
            <li className="current-nav-link">Blog</li>
            <li>Support</li>
          </ul>
        </div>
        
        {/* Divider */}
        <div className="vertical-divider nav-desktop"></div>
        
        {/* CTA buttons */}
        <div className="nav-cta-container">
          <span className="link text-color-secondary nav-responsive-mobile">Sign In</span>
          <button className="button-primary nav-responsive-mobile">Get Started for Free</button>
          
          {/* Responsive Menu Button */}
          <div
            className="nav-responsive menu-icon"
            onClick={() => controlMenuHandler(true)}
          >
            <img src="/menu_icon.svg" alt="Menu" />
          </div>
        </div>
      </div>
      
      {/* Show / Hide responsive menu */}
      {
        menuShow && 
        <Menu closeMenu={controlMenuHandler} />
      }
    </nav>
  )
}

export default Navigation;