import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostBlock = (props) => {
  return(
    <>
      <img src={props.banner} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link to={`/blog/${props.id}`}>Read More</Link>
    </>
  )
}

export default PostBlock;