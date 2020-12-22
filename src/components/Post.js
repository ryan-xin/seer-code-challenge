import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedPosts from './RelatedPosts';
import Loading from './Loading';
import axios from 'axios';
import './Post.css';

const Post = (props) => {
  const currentPostId = parseInt(props.match.params.postId);
  const POST_URL = `https://backend.seerplatform.com/content-types/blog/${currentPostId}`;
  const BLOG_URL = 'https://backend.seerplatform.com/content-types/blog';
  
  const currentPage = localStorage.getItem('currentPage');
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  const getRelatedPosts = (posts, title, postId) => {
    // Remove current post from all posts
    posts = posts.filter(post => {
      return post.id !== postId;
    })
    
    let relatedPosts = [];
    relatedPosts = posts.filter(post => {
      const titleArray1 = title.toLocaleLowerCase().split(' ').sort();
      const titleArray2 = post.title.toLocaleLowerCase().split(' ').sort();
      const similarArray = titleArray1.filter(word => {
        return titleArray2.includes(word);
      });
      return similarArray.length >= 2;
    });
    console.log(relatedPosts);
    
    // If relatedPosts is more than 3 just show first 3
    const length = relatedPosts.length;
    if(length >= 3) {
      return relatedPosts.slice(0, 3);
    // If relatedPosts is less than 3 push latest posts to relatedPosts to make it 3
    } else {
      for (let i = 0; i < (3 - length); i++) {
        relatedPosts.push(posts[i]);
      }
      return relatedPosts;
    }
  };
  
  // Get selected post from backend when DOM is ready (componentDidMount)
  useEffect(() => {
    axios.get(POST_URL)
    .then(res => {
      const post = res.data.data.content;
      setTitle(post.title);
      setDate(post.created_at.slice(0, 10));
      setBody(post.body);
      setIsLoading(false);
      // Get related posts
      axios.get(BLOG_URL)
      .then(res => {
        const resPosts = res.data.data.content_type.contents;
        console.log(post.title);
        // getRelatedPosts(resPosts, title, currentPostId);
        setRelatedPosts(getRelatedPosts(resPosts, title, currentPostId));
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