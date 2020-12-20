import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import PostList from './PostList';
import Pagination from './Pagination';
import Loading from './Loading';
import axios from 'axios';

const Blog = (props) => {
  const BLOG_URL = 'http://backend.seerplatform.com/content-types/blog';
  
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const changePageHandler = (num) => {
    setCurrentPage(currentPage + num);
    window.scrollTo(0, 0);
  };
  
  const setPageHandler = (num) => {
    setCurrentPage(num);
    window.scrollTo(0, 0);    
  }
  
  useEffect(() => {
    axios.get(BLOG_URL)
    .then(res => {
      const resPosts = res.data.data.content_type.contents;
      setAllPosts(resPosts);
      setPosts(resPosts.slice(0, 10));
      const pages = Math.round(resPosts.length / 10);
      setPages(pages);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  
  useEffect(() => {
    setPosts(allPosts.slice((currentPage - 1) * 10, (currentPage * 10)))
  }, [currentPage]);
  
  return(
    <>
      <Banner />
      {
        isLoading ? 
        <Loading /> :
        <>
          <PostList 
            posts={posts}
            currentPage={currentPage}
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