import React from 'react';
import { Link } from 'react-router-dom';
import './PostBlock.css';

const PostBlock = (props) => {
  const {id, banner, title, description} = props;
  const POST_PATH = `/blog/post/${id}`;
  
  // Save current scroll position to localStorage
  const saveScrollPosition = () => {
    localStorage.setItem('scrollPosition', window.pageYOffset);
  };
  
  return(
    <div className="post-block-item">
      {/* Blog post thumbnail */}
      <Link to={POST_PATH}>
        <div className="thumbnail-container">
          <img
            onClick={saveScrollPosition}
            className="post-thumbnail"
            src={banner}
            alt={title}
          />
        </div>
      </Link>
      
      {/* Blog post title */}
      <Link
        className="no-underline-link"
        to={POST_PATH}>
        <h2
          onClick={saveScrollPosition}
          className="text-color-darkgrey post-title-link"
        >
          {title}
        </h2>
      </Link>
      
      {/* Blog post description */}
      <p className="text-color-darkgrey">{description}</p>
      
      {/* Blog post cta button */}
      <Link
        className="link text-color-secondary"
        onClick={saveScrollPosition}
        to={POST_PATH}
      >
        Read More
      </Link>
    </div>
  )
}

export default PostBlock;