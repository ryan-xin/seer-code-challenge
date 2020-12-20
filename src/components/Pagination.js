import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

const Pagination = (props) => {
  const pageButtons = [];
  
  for (let i = 1; i <= props.pages; i++) {
    if(i === props.currentPage) {
      pageButtons.push(<p className="current-page" key={i}>{i}</p>)
    } else {
      pageButtons.push(<p key={i}>{i}</p>)
    }
  }
  
  const changePageHandler = (num) => {
    if(num === -1 && props.currentPage > 1) {
      props.changePage(num);
    }
    if(num === 1 && props.currentPage < props.pages) {
      props.changePage(num);
    }
  }
  
  return(
    <>
      <div>
        {
          props.currentPage === 1 ? 
          null : <div onClick={() => changePageHandler(-1)}>-</div>
        }
        {pageButtons}
        {
          props.currentPage === props.pages ? 
          null : <div onClick={() => changePageHandler(1)}>+</div>
        }
      </div>
    </>
  )
}

export default Pagination;