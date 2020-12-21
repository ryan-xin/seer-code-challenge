import React from 'react';
import PostBlock from './PostBlock';
import RelatedPostBlock from './RelatedPostBlock';
import './RelatedPosts.css';

const RelatedPosts = (props) => {
  return(
    <div className="related-posts-container">
      <div className="related-posts-content-wrapper">
        <h3 className="text-color-primary">Related Posts</h3>
        <div className="related-posts-list-container">
          {
            props.posts.map((post) => {
              return (
                <RelatedPostBlock 
                  key={post.id}
                  id={post.id}
                  banner={post.banner}
                  title={post.title}
                  description={post.description}
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