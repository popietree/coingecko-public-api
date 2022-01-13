import React, { useContext } from 'react';
import ExchangeContext from '../../store/exchange-context';
import classes from './Pagination.module.css';

// implement loading before pagniation

function Pagination() {
  const maxShown = 5;
  const { setCurrPage } = useContext(ExchangeContext);

  const { currPage } = useContext(ExchangeContext);
  // const [pageArr, setPageArr] = useState();

  // const pageNum = Number(event.target.textContent);

  const changePage = (event) => {
    // Get the page nummber that user clicked to
    const pageNumber = Number(event.target.textContent);
    setCurrPage(pageNumber);
  };

  // const paginationGroup = Array.from({ length: maxShown }, (v, i) => (v = i + 1));

  const paginationGroup = Array.from(
    { length: maxShown },
    (_, index) => currPage + index
  );

  // const createPageGroup = () => {
  //   setPageArr((prevState) => {
  //     prevState.forEach((ele, i) => {});
  //   });
  // };

  const goToNextPage = () => {
    // if (currPage !== pageEnd) {
    //   return prevState + 1;
    // } else {
    //   return console.log("reached max page limit");
    // }
    setCurrPage((prevState) => prevState + 1);
  };
  const goToPrevPage = () => {
    // compare the max array value with postion 1 and max
    // console.log(pageArr);
    setCurrPage((prevState) => prevState - 1);
  };

  // need key?
  const paginationContent = paginationGroup.map((item) => (
    <button type="button" onClick={changePage}>
      <span>{item}</span>
    </button>
  ));

  return (
    <nav className={classes.pagination}>
      <button type="button" className={classes.prev} onClick={goToPrevPage}>
        prev
      </button>
      {paginationContent}
      <button type="button" className={classes.next} onClick={goToNextPage}>
        next
      </button>
    </nav>
  );
}
export default Pagination;
