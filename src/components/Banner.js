import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = (props) => {
  return(
    <div className="banner">
      <h1>Seer Blog</h1>
      <p>News, articles and insightful stories dedicated to prepare you for your future decisions.</p>
      <img src='/arrow_down.svg' alt="down arrow" />
    </div>
  )
}

export default Banner;