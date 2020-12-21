import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedPostBlock.css';

const RelatedPostBlock = (props) => {
  const POST_PATH = `/blog/post/${props.id}`;
  
  return(
    <div className="related-post-block-item">
      {/* Blog post thumbnail */}
      <Link to={POST_PATH}>
        <div className="thumbnail-container">
          <img
            className="post-thumbnail"
            src={props.banner}
            alt={props.title}
          />
        </div>
      </Link>
      
      {/* Blog post title */}  
      <Link
        className="no-underline-link"
        to={POST_PATH}>
        <h4
          className="text-color-darkgrey post-title-link"
        >
          {props.title}
        </h4>
      </Link>
      
      {/* Blog post description */}
      <p className="related-post-description text-color-darkgrey">{props.description}</p>
      
      {/* Blog post cta button */}
      <Link
        className="link text-color-secondary"
        to={POST_PATH}
      >
        Read More
      </Link>
    </div>
  )
}

export default RelatedPostBlock;