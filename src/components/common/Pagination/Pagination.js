import React from 'react';
import { useHistory } from 'react-router-dom';
import './Pagination.css';

const Pagination = (props) => {
  const {pages, currentPage, setPage, changePage} = props;
  
  // Use props.pages to render page number buttons
  const pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    // Set selected class(current-page) to props.currentPage number button
    if(i === currentPage) {
      pageButtons.push(
        <div
          className="current-page"
          key={i} 
          onClick={() => setPageHandler(i)}
        >
          <span 
            className="page-number text-color-white" 
          >{i}</span>
        </div>
      )
    } else {
      pageButtons.push(
        <div
          className="unselected-page"
          key={i}
          onClick={() => setPageHandler(i)}
        >
          <span
            className="page-number text-color-primary"
          >{i}</span>
        </div>
      )
    }
  }
  
  const history = useHistory();
  
  // Lifting State num to parent to setCurrentPage: '-1' stands for clicking PrevPage Button; '1' stands for clicking PrevPage Button
  const changePageHandler = (num) => {
    // Only trigger PrevPage Button when props.currentPage is bigger than 1
    if(num === -1 && currentPage > 1) {
      changePage(num);
    }
    
    // Only trigger NextPage Button when props.currentPage is smaller than total pages(props.pages)
    if(num === 1 && currentPage < pages) {
      changePage(num);
    }
    
    history.push(`/blog/${currentPage + num}`);
  };
  
  // Lifting State num to parent to setCurrentPage: num is the selected page number
  const setPageHandler = (num) => {
    setPage(num);
    history.push(`/blog/${num}`)
  };
  
  return(
    <>
      <div className="pagination-container">
        {/* Hide PrevPage Button when props.currentPage is the first page */}
        {
          currentPage === 1 ? 
          null : 
          <div
            className="unselected-page"
            onClick={() => changePageHandler(-1)}
          >
            <img src="/prev_page_icon.svg" alt="Prev Page" />
          </div>
        }
        
        {/* Render all page numbers */}
        <div className="page-number-container">
          {pageButtons}
        </div>
        
        {/* Hide NextPage Button when props.currentPage is the last page */}
        {
          currentPage === pages ? 
          null : 
          <div
            className="unselected-page"
            onClick={() => changePageHandler(1)}
          >
            <img src="/next_page_icon.svg" alt="Next Page" />
          </div>
        }
      </div>
    </>
  )
}

export default Pagination;