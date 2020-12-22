import React from 'react';
import './Banner.css';

const Banner = (props) => {
  const {title, description} = props;
  
  return(
    <div
      className="banner"
      style={{
        background: 'url("/banner_circle_01.svg") left top no-repeat, url("/banner_circle_02.svg") right bottom no-repeat',
        backgroundColor: '#6C3563'
      }}
    >
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <img src='/arrow_down.svg' alt="down arrow" />
        </div>
      </div>
    </div>
  )
}

export default Banner;