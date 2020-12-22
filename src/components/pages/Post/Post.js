import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedPosts from '../../common/RelatedPosts/RelatedPosts';
import Loading from '../../common/Loading/Loading';
import { getPost, getAllPosts, getRelatedPosts } from './PostHelper';
import axios from 'axios';
import './Post.css';

const Post = (props) => {
  const currentPostId = parseInt(props.match.params.postId);
  const BLOG_URL = 'https://backend.seerplatform.com/content-types/blog';
  const POST_URL = `${BLOG_URL}/${currentPostId}`;
  const currentPage = localStorage.getItem('currentPage');
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  // Get selected post from backend when DOM is ready (componentDidMount)
  useEffect(() => {
    axios.get(POST_URL)
    .then(res => {
      const post = getPost(res);
      setTitle(post.title);
      setDate(post.created_at.slice(0, 10));
      setBody(post.body);
      setIsLoading(false);
      
      // Get related posts
      axios.get(BLOG_URL)
      .then(res => {
        const resPosts = getAllPosts(res);
        setRelatedPosts(getRelatedPosts(resPosts, post));
      })
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
                <h2 className="text-color-white">{title}</h2>
                <p>{date}</p>
              </div>
            </div>
          </div>
          
          {/* Blog post body content */}
          <div
            className="post-body"
            dangerouslySetInnerHTML={{__html: body}}
          />
          
          {/* Related posts */}
          <RelatedPosts
            posts={relatedPosts}
          />
        </>
      }
    </>
  )
}

export default Post;