import React, { useState, useEffect } from 'react';

const Header = (props) => {
  return(
    <header>
      <div>
        <img src="/seer_logo_color.png" alt="seer_logo" />
      </div>
      <div>
        <div>
          <ul>
            <li>Why Seer</li>
            <li>Pricing</li>
            <li>Customer</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p>Sign In</p>
          <button>Get Started for Free</button>
        </div>
      </div>
    </header>
  )
}

export default Header;