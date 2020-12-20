import React, { useState, useEffect } from 'react';

const PostBlock = (props) => {
  return(
    <>
      <img src={props.banner} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>Read More</button>
    </>
  )
}

export default PostBlock;