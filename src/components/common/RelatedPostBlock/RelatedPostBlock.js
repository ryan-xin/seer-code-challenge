import React from 'react';
import { useHistory } from 'react-router-dom';
import './RelatedPostBlock.css';

const RelatedPostBlock = (props) => {
  const {id, banner, title, description} = props;
  const POST_PATH = `/blog/post/${id}`;
  
  const history = useHistory();
  // Force reload the page to avoid 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack' problem
  const reloadPage = () => {
    history.push(POST_PATH);
    window.location.reload();
    window.scrollTo(0, 0);
  };
  
  return(
    <div className="related-post-block-item">
      {/* Related blog post thumbnail */}
      <div className="thumbnail-container" onClick={reloadPage}>
        <img
          className="post-thumbnail"
          src={banner}
          alt={title}
        />
      </div>
      
      {/* Related blog post title */}  
      <h4 className="text-color-darkgrey post-title-link" onClick={reloadPage}>
        {title}
      </h4>
      
      {/* Related blog post description */}
      <p className="related-post-description text-color-darkgrey">
        {description}
      </p>
      
      {/* Related blog post cta button */}
      <p
        className="link text-color-secondary"
        onClick={reloadPage}
      >
        Read More
      </p>
    </div>
  )
}

export default RelatedPostBlock;