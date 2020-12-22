import React from 'react';
import PostBlock from '../PostBlock/PostBlock';

const PostList = (props) => {
  return(
    props.posts.map((post) => {
      return <PostBlock 
        key={post.id}
        id={post.id}
        banner={post.banner}
        title={post.title}
        description={post.description}
      />
    })
  )
}

export default PostList;