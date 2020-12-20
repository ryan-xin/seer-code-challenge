import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostBlock.css';

const PostBlock = (props) => {
  return(
    <div className="post-block-item">
      <Link to={`/blog/${props.id}`}>
        <img className="post-thumbnail" src={props.banner} alt={props.title} />
      </Link>
      <Link className="no-underline-link" to={`/blog/${props.id}`}>
        <h2 className="text-color-darkgrey post-title-link">{props.title}</h2>
      </Link>
      <p className="text-color-darkgrey">{props.description}</p>
      <Link className="no-underline-link link text-color-secondary" to={`/blog/${props.id}`}>Read More</Link>
    </div>
  )
}

export default PostBlock;