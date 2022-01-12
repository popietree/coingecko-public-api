import ExchangeContext from "./exchange-context";
import { useState, useEffect } from "react";

const ExchangeProvider = (props) => {
  const [currPage, setCurrPage] = useState(1);
  const [pageEnd, setPageEnd] = useState();
  const [currData, setCurrData] = useState();
  const [detailClick, setDetailClick] = useState();

  const exchangeContext = {
    currPage,
    setCurrPage,
    pageEnd,
    setPageEnd,
    currData,
    setCurrData,
    detailClick,
    setDetailClick,
  };

  return (
    <ExchangeContext.Provider value={exchangeContext}>
      {props.children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;
