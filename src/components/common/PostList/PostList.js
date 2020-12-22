import React from 'react';
import PostBlock from '../PostBlock/PostBlock';

const PostList = (props) => {
  return(
    props.posts.map((post) => {
      const {id, banner, title, description} = post;
      
      return <PostBlock 
        key={id}
        id={id}
        banner={banner}
        title={title}
        description={description}
      />
    })
  )
}

export default PostList;