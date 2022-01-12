import ExchangeContext from "./exchange-context";
import { useState, useEffect } from "react";

const ExchangeProvider = (props) => {
  const [currPage, setCurrPage] = useState(1);
  const [pageEnd, setPageEnd] = useState();

  const exchangeContext = { currPage, setCurrPage, pageEnd, setPageEnd };

  return (
    <ExchangeContext.Provider value={exchangeContext}>
      {props.children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;
