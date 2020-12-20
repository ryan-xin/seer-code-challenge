import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = (props) => {
  const POST_URL = `http://backend.seerplatform.com/content-types/blog/${props.match.params.postId}`;
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios.get(POST_URL)
    .then(res => {
      console.log(res.data.data.content);
      const post = res.data.data.content;
      setTitle(post.title);
      setDate(post.created_at.slice(0, 10));
      setBody(post.body);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  
  return(
    <>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
      </div>
      {
        isLoading ? 
        <div>
          <p>Loading</p>
        </div> :
        <div dangerouslySetInnerHTML={{__html: body}} />
      }
    </>
  )
}

export default Post;