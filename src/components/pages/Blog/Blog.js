import React, { useState, useEffect } from 'react';
import Banner from '../../common/Banner/Banner';
import PostList from '../../common/PostList/PostList';
import Pagination from '../../common/Pagination/Pagination';
import Loading from '../../common/Loading/Loading';
import { getAllPosts, getPageNumber, getTenPosts, windowScrollPosition } from './BlogHelper';
import axios from 'axios';
import './Blog.css';

const Blog = (props) => {
  const BLOG_URL = 'https://backend.seerplatform.com/content-types/blog';
  const blogBanner = {
    title: 'Seer Blog',
    description: 'News, articles and insightful stories dedicated to prepare you for your future decisions.'
  };
  
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get num(1 or -1; 1 stands for next page & -1 stands for prev page) from Pagination to setCurrentPage
  const changePageHandler = (num) => {
    const targetPageNum = currentPage + num;
    setCurrentPage(targetPageNum);
    // Save currentPage to localStorage for non-children component use
    localStorage.setItem('currentPage', targetPageNum);
    // Scroll to Blog List top position
    windowScrollPosition(500);
  };
  
  // Get num(page number) from Pagination to setCurrentPage
  const setPageHandler = (num) => {
    setCurrentPage(num);
    // Save currentPage to localStorage for non-children component use
    localStorage.setItem('currentPage', num);
    // Scroll to Blog List top position
    windowScrollPosition(500);
  };
  
  // Get all posts from backend when DOM is ready (componentDidMount)
  useEffect(() => {
    axios.get(BLOG_URL)
    .then(res => {
      const resPosts = getAllPosts(res);
      
      // Save all posts to allPosts
      setAllPosts(resPosts);
      
      // Save pages number to pages
      setPages(getPageNumber(resPosts));
      
      // If existedPage has value setCurrentPage to parseInt(existedPage)
      const existedPage = props.match.params.pageNum;
      if(existedPage) {
        // props.match.params.pageNum returns a string, it needs to be converted to num.
        const convertedExistedPage = parseInt(existedPage);
        setCurrentPage(convertedExistedPage);
        setDisplayedPosts(getTenPosts(resPosts, convertedExistedPage));
        // Save currentPage to localStorage for non-children component use
        localStorage.setItem('currentPage', convertedExistedPage);
      } else {
        // If existedPage doesn't exists, setCurrentPage to 1
        setCurrentPage(1);
        // Save currentPage to localStorage for non-children component use
        localStorage.setItem('currentPage', 1);
        // Save first 10 posts to displayedPosts and pass to PostList
        setDisplayedPosts(getTenPosts(resPosts, 1));
      } 
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  
  // For handling go back to previous scroll position
  useEffect(() => {
    // Get saved scrollPosition from localStorage
    const scrollPosition = localStorage.getItem('scrollPosition');
    if(scrollPosition) {
      setTimeout(() => {
        windowScrollPosition(scrollPosition);
        localStorage.removeItem('scrollPosition');
      }, 300);
    }
  });
  
  // When currentPage changed this method is trigged to set current displayedPosts and pass to PostList
  useEffect(() => {
    setDisplayedPosts(getTenPosts(allPosts, currentPage))
  }, [allPosts, currentPage]);
  
  return(
    <>
      {/* Blog top banner */}
      <Banner 
        title={blogBanner.title}
        description={blogBanner.description}
      />
      
      {
        isLoading ? 
        <Loading /> :
        <div className="blog-container">
        
          {/* Blog posts list */}
          <div className="blog-list-container">
            <PostList 
              posts={displayedPosts}
            />
          </div>
          
          {/* Pagination */}
          <Pagination 
            pages={pages}
            currentPage={currentPage}
            changePage={changePageHandler}
            setPage={setPageHandler}
          />
        </div>
      }
    </>
  )
}

export default Blog;