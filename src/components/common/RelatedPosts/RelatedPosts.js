import React from 'react';
import RelatedPostBlock from '../RelatedPostBlock/RelatedPostBlock';
import './RelatedPosts.css';

const RelatedPosts = (props) => {
  return(
    <div className="related-posts-container">
      <div className="related-posts-content-wrapper">
        <h3 className="text-color-primary">Related Posts</h3>
        <div className="related-posts-list-container">
          {
            props.posts.map((post) => {
              const {id, banner, title, description} = post;
              
              return (
                <RelatedPostBlock 
                  key={id}
                  id={id}
                  banner={banner}
                  title={title}
                  description={description}
                />
              )
            })
          }
        </div>
      </div>
        </div>
  )
}

export default RelatedPosts;