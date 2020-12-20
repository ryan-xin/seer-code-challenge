import React, { useState, useEffect } from 'react';
import PostBlock from './PostBlock';
// import './PostList.css';

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