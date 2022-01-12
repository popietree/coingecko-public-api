import { useState, useContext } from "react";
import ExchangeContext from "../../store/exchange-context";
import classes from "./Pagination.module.css";

//implement loading before pagniation

const Pagination = () => {
  //mobile page display limit = 5
  const pageLimit = 5;
  const { setCurrPage } = useContext(ExchangeContext);
  const { pageEnd } = useContext(ExchangeContext);
  const { currPage } = useContext(ExchangeContext);
  setCurrPage(9);
  console.log(currPage);

  // const pageNum = Number(event.target.textContent);

  const goToNextPage = () => {
    setCurrPage((page) => page + 1);
  };
  const goToPrevPage = () => {
    setCurrPage((page) => page - 1);
  };

  const changePage = (event) => {
    // Get the page nummber that user clicked to
    const pageNumber = Number(event.target.textContent);
    setCurrPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  console.log(getPaginationGroup());

  // pageGroup.map((ele, index) => (
  //   <button key={index} onClick={changePage}>
  //     <span>{item}</span>
  //   </button>

  return (
    <article>
      <nav className={classes.pagination}>
        <a className={classes.prev} onClick={goToPrevPage}>
          prev
        </a>
        <a>1,2,3,4,5 </a>
        <a className={classes.next} onClick={goToNextPage}>
          next
        </a>
      </nav>
    </article>
  );
};
export default Pagination;
