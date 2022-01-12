import { useState, useContext } from "react";
import ExchangeContext from "../../store/exchange-context";
import classes from "./Pagination.module.css";

//implement loading before pagniation

const Pagination = () => {
  //mobile page display limit = 5
  const maxShown = 5;
  const { setCurrPage } = useContext(ExchangeContext);
  const { pageEnd } = useContext(ExchangeContext);
  const { currPage } = useContext(ExchangeContext);
  const [pageArr, setPageArr] = useState();
  console.log(currPage);

  // const pageNum = Number(event.target.textContent);

  const changePage = (event) => {
    // Get the page nummber that user clicked to
    const pageNumber = Number(event.target.textContent);
    setCurrPage(pageNumber);
  };

  // const paginationGroup = Array.from({ length: maxShown }, (v, i) => (v = i + 1));

  const paginationGroup = Array.from(
    { length: maxShown },
    (_, i) => currPage + i
  );

  const createPageGroup = () => {
    setPageArr((prevState) => {
      prevState.forEach((ele, i) => {});
    });
  };

  const goToNextPage = () => {
    setCurrPage((prevState) => {
      return prevState + 1;
      // if (currPage !== pageEnd) {
      //   return prevState + 1;
      // } else {
      //   return console.log("reached max page limit");
      // }
    });
  };
  const goToPrevPage = () => {
    //compare the max array value with postion 1 and max
    console.log(pageArr);
    setCurrPage((prevState) => {
      return prevState - 1;
    });
  };

  const paginationContent = paginationGroup.map((item, i) => (
    <a key={i} onClick={changePage}>
      <span>{item}</span>
    </a>
  ));

  // pageGroup.map((ele, i) => (
  //   <button key={i} onClick={changePage}>
  //     <span>{item}</span>
  //   </button>

  return (
    <article>
      <nav className={classes.pagination}>
        <a className={classes.prev} onClick={goToPrevPage}>
          prev
        </a>
        {paginationContent}
        <a className={classes.next} onClick={goToNextPage}>
          next
        </a>
      </nav>
    </article>
  );
};
export default Pagination;
