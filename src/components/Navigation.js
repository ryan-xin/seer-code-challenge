import './Navigation.css';
import React, { useState, useEffect } from 'react';

const Navigation = (props) => {
  return(
    <nav className="main-nav nav-container">
      <div>
        <img className="nav-logo" src="/seer_logo_color@2x.png" alt="seer_logo" />
      </div>
      <div className="nav-link-container">
        <div>
          <ul className="nav-link link text-color-primary">
            <li>Why Seer</li>
            <li>Pricing</li>
            <li>Customer</li>
            <li className="current-nav-link">Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="vertical-divider"></div>
        <div className="nav-cta-container">
          <span className="link text-color-secondary">Sign In</span>
          <button className="button-primary">Get Started for Free</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;