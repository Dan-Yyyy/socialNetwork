import React, { useState } from "react";
import style from './Pagination.module.sass';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
 
const Pagination = ( {totalUsersCount, pageSize, currentPage, onChangePage, portionSize = 10} ) => {
  let pageCount = Math.ceil( totalUsersCount / pageSize);
  let allPages = [];
  for(let i = 1; i <= pageCount; i++ ) {
    allPages.push(i);
  }
  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return( 
    <div className={ style.pagination}>
      { portionNumber > 1 &&
        <button 
        className={ style.arrow }
          onClick={ () => setPortionNumber(portionNumber - 1)}> 
          <IoIosArrowBack size={14}/> </button>}
          {
            allPages?.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((page) => {
              return <span 
                key={ page } 
                className={ currentPage === page ? style.page_active : null }
                onClick={() => onChangePage(page)}>
                { page }
              </span>
          })}
      { portionCount > portionNumber &&
        <button 
          className={ style.arrow }
          onClick={() => setPortionNumber(portionNumber + 1)}> 
          <IoIosArrowForward/> </button>
      }
    </div>     
  )
}

export default Pagination;