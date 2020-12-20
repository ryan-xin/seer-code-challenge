import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = (props) => {
  return(
    <div className="banner">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src='/arrow_down.svg' alt="down arrow" />
    </div>
  )
}

export default Banner;