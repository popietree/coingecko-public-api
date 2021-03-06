import React from 'react';

const ExchangeContext = React.createContext({
  currPage: 1,
  setCurrPage: () => {},
  pageEnd: '',
  setPageEnd: () => {},
  currData: [],
  setCurrData: () => {},
  detailClick: '',
  setDetailClick: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export default ExchangeContext;
