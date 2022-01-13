/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import ExchangeContext from './exchange-context';

function ExchangeProvider(props) {
  const [currPage, setCurrPage] = useState(1);
  const [pageEnd, setPageEnd] = useState();
  const [currData, setCurrData] = useState();
  const [detailClick, setDetailClick] = useState();
  const [isLoading, setIsLoading] = useState();
  const { children } = props;

  const exchangeContext = React.useMemo(
    () => ({
      currPage,
      setCurrPage,
      pageEnd,
      setPageEnd,
      currData,
      setCurrData,
      detailClick,
      setDetailClick,
      isLoading,
      setIsLoading,
    }),
    [currPage, detailClick, pageEnd, currData]
  );

  return (
    <ExchangeContext.Provider value={exchangeContext}>
      {children}
    </ExchangeContext.Provider>
  );
}

export default ExchangeProvider;
