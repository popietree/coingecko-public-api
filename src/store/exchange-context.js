import React from "react";
const ExchangeContext = React.createContext({
  currPage: 1,
  pageEnd: "",
  setPageEnd: () => {},
  setCurrPage: () => {},
});

export default ExchangeContext;
