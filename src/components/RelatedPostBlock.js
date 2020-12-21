import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedPostBlock.css';

const RelatedPostBlock = (props) => {
  const POST_PATH = `/blog/post/${props.id}`;
  
  // Force reload the page to avoid 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack' problem
  const reloadPage = () => {
    window.location.reload(true);
    window.scrollTo(0, 0);
  };
  
  return(
    <div className="related-post-block-item">
      {/* Related blog post thumbnail */}
      <Link to={POST_PATH} onClick={reloadPage}>
        <div className="thumbnail-container">
          <img
            className="post-thumbnail"
            src={props.banner}
            alt={props.title}
          />
        </div>
      </Link>
      
      {/* Related blog post title */}  
      <Link
        className="no-underline-link"
        to={POST_PATH}
        onClick={reloadPage}
      >
        <h4
          className="text-color-darkgrey post-title-link"
        >
          {props.title}
        </h4>
      </Link>
      
      {/* Related blog post description */}
      <p className="related-post-description text-color-darkgrey">{props.description}</p>
      
      {/* Related blog post cta button */}
      <Link
        className="link text-color-secondary"
        to={POST_PATH}
        onClick={reloadPage}
      >
        Read More
      </Link>
    </div>
  )
}

export default RelatedPostBlock;