import React, { useContext } from 'react';
import ExchangeContext from '../../store/exchange-context';
import classes from './Pagination.module.css';
import Container from './Container';

function Pagination() {
  const maxShown = 5;
  const { setCurrPage } = useContext(ExchangeContext);

  const { currPage } = useContext(ExchangeContext);

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrPage(pageNumber);
  };

  const paginationGroup = Array.from(
    { length: maxShown },
    (_, index) => currPage + index
  );

  const goToNextPage = () => {
    setCurrPage((prevState) => {
      if (currPage === 31) {
        return prevState;
      }
      return prevState + 1;
    });
  };

  // BUG allow prev page group jump
  const goToPrevPage = () => {
    setCurrPage((prevState) => {
      if (currPage === 1) {
        return prevState;
      }
      return prevState - 1;
    });
  };

  // need key?
  const paginationContent = paginationGroup.map((item) => (
    <button type="button" onClick={changePage} key={Math.random() + item}>
      <span>{item}</span>
    </button>
  ));

  return (
    <Container>
      <nav className={classes.pagination}>
        <button type="button" className={classes.prev} onClick={goToPrevPage}>
          prev
        </button>
        {paginationContent}
        <button type="button" className={classes.next} onClick={goToNextPage}>
          next
        </button>
      </nav>
    </Container>
  );
}
export default Pagination;
