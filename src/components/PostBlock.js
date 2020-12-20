import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostBlock.css';

const PostBlock = (props) => {
  const POST_PATH = `/blog/post/${props.id}`;
  
  // Save current scroll position to localstorage
  const saveScrollPosition = () => {
    console.log(window.pageYOffset);
    localStorage.setItem('scrollPosition', window.pageYOffset);
  };
  
  return(
    <div className="post-block-item">
      <Link to={POST_PATH}>
        <img onClick={saveScrollPosition} className="post-thumbnail" src={props.banner} alt={props.title} />
      </Link>
      <Link className="no-underline-link" to={POST_PATH}>
        <h2 onClick={saveScrollPosition} className="text-color-darkgrey post-title-link">{props.title}</h2>
      </Link>
      <p className="text-color-darkgrey">{props.description}</p>
      <Link className="link text-color-secondary" onClick={saveScrollPosition} to={POST_PATH}>Read More</Link>
    </div>
  )
}

export default PostBlock;