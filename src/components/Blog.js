import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import PostList from './PostList';
import Pagination from './Pagination';
import Loading from './Loading';
import axios from 'axios';

const Blog = (props) => {
  const BLOG_URL = 'http://backend.seerplatform.com/content-types/blog';
  const blogBanner = {
    title: 'Seer Blog',
    description: 'News, articles and insightful stories dedicated to prepare you for your future decisions.'
  };
  
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get num(1 or -1) from Pagination to setCurrentPage
  const changePageHandler = (num) => {
    setCurrentPage(currentPage + num);
    // Scroll to Blog List top position
    window.scrollTo(0, 0);
  };
  
  // Get num(page number) from Pagination to setCurrentPage
  const setPageHandler = (num) => {
    setCurrentPage(num);
    // Scroll to Blog List top position
    window.scrollTo(0, 0);    
  };
  
  // Call the method when DOM is ready (componentDidMount)
  useEffect(() => {
    axios.get(BLOG_URL)
    .then(res => {
      const resPosts = res.data.data.content_type.contents;
      // Save all posts to allPosts
      setAllPosts(resPosts);
      // Save first 10 posts to displayedPosts and pass to PostList
      setDisplayedPosts(resPosts.slice(0, 10));
      // Save pages number to pages
      const pages = Math.round(resPosts.length / 10);
      setPages(pages);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  
  // When currentPage changed call this method to set current displayedPosts and pass to PostList
  useEffect(() => {
    setDisplayedPosts(allPosts.slice((currentPage - 1) * 10, (currentPage * 10)))
  }, [currentPage]);
  
  return(
    <>
      <Banner 
        title={blogBanner.title}
        description={blogBanner.description}
      />
      {
        isLoading ? 
        <Loading /> :
        <>
          <PostList 
            posts={displayedPosts}
          />
          <Pagination 
            pages={pages}
            currentPage={currentPage}
            changePage={changePageHandler}
            setPage={setPageHandler}
          />
        </>
      }
    </>
  )
}

export default Blog;