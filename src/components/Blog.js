import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import PostBlock from './PostBlock';
import axios from 'axios';

const Blog = (props) => {
  const BLOG_URL = 'http://backend.seerplatform.com/content-types/blog';
  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios.get(BLOG_URL)
    .then(res => {
      console.log(res.data.data.content_type.contents);
      setPosts(res.data.data.content_type.contents);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  
  return(
    <>
      <Banner />
      {
        isLoading ? 
        <div>
          <p>Loading</p>
        </div> :
        posts.map(post => {
          return <PostBlock 
            key={post.id}
            id={post.id}
            banner={post.banner}
            title={post.title}
            description={post.description}
          />
        })
      }
    </>
  )
}

export default Blog;