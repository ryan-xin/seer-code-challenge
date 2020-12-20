import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

const Pagination = (props) => {
  // Use props.pages to render pages number buttons
  const pageButtons = [];
  for (let i = 1; i <= props.pages; i++) {
    // Set selected class(current-page) to props.currentPage number button
    if(i === props.currentPage) {
      pageButtons.push(
        <p 
          className="current-page" 
          key={i} 
          onClick={() => setPageHandler(i)}
        >{i}</p>
      )
    } else {
      pageButtons.push(
        <p
          key={i}
          onClick={() => setPageHandler(i)}
        >{i}</p>
      )
    }
  }
  
  // Lifting State num to parent to setCurrentPage: '-1' stands for clicking PrevPage Button; '1' stands for clicking PrevPage Button
  const changePageHandler = (num) => {
    // Only trigger PrevPage Button when props.currentPage is bigger than 1
    if(num === -1 && props.currentPage > 1) {
      props.changePage(num);
    }
    // Only trigger NextPage Button when props.currentPage is smaller than total pages(props.pages)
    if(num === 1 && props.currentPage < props.pages) {
      props.changePage(num);
    }
  };
  
  // Lifting State num to parent to setCurrentPage: num is the selected page number
  const setPageHandler = (num) => {
    props.setPage(num);
  };
  
  return(
    <>
      <div>
        {/* Hide PrevPage Button when props.currentPage is the first page */}
        {
          props.currentPage === 1 ? 
          null : 
          <div onClick={() => changePageHandler(-1)}>-</div>
        }
        {pageButtons}
        {/* Hide NextPage Button when props.currentPage is the last page */}
        {
          props.currentPage === props.pages ? 
          null : 
          <div onClick={() => changePageHandler(1)}>+</div>
        }
      </div>
    </>
  )
}

export default Pagination;