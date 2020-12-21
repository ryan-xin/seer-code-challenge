import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import axios from 'axios';
import './Post.css';

const Post = (props) => {
  const POST_URL = `https://backend.seerplatform.com/content-types/blog/${props.match.params.postId}`;
  
  const currentPage = localStorage.getItem('currentPage');
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get selected post from backend when DOM is ready (componentDidMount)
  useEffect(() => {
    axios.get(POST_URL)
    .then(res => {
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
      {
        isLoading ? 
        <Loading /> :
        <>
          {/* Blog post header */}
          <div
            className="post-header"
            style={{
              background: 'url("/banner_circle_03.svg") right bottom no-repeat',
              backgroundColor: '#6C3563'
            }}
          >
            {/* Back to Blog button */}
            <div className="bread-crumbs">
              <Link
                className="link-small text-color-white"
                to={`/blog/${currentPage}`}
              >
                &lt; Back to Blog
              </Link>
            </div>
            
            <div className="post-header-content-wrapper">
              <div className="post-header-content">
                <h1 className="text-color-white">{title}</h1>
                <p>{date}</p>
              </div>
            </div>
          </div>
          
          {/* Blog post body content */}
          <div
            className="post-body"
            dangerouslySetInnerHTML={{__html: body}}
          />
        </>
      }
    </>
  )
}

export default Post;