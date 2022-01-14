import React, { useState, useEffect, useContext } from 'react';
import classes from './Exchange.module.css';
import ExchangeItem from './ExchangeItem';
import ExchangeContext from '../../store/exchange-context';
import LoadingSpinner from '../Layout/LoadingSpinner';

function Exchange(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { currPage, setCurrData } = useContext(ExchangeContext);

  const { setPageEnd } = useContext(ExchangeContext);
  const [resData, setResData] = useState([]);
  const { onLoad } = props;

  const fetchData = async (pageNum) => {
    setIsLoading(true);
    const exsPerPage = 10;
    const url = `https://api.coingecko.com/api/v3/exchanges?per_page=${exsPerPage}&page=${pageNum}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const responseData = await response.json();

    const totalNumExs = response.headers.get('total');

    const totalNumPages = Math.ceil(totalNumExs / exsPerPage);

    setResData(responseData);

    setCurrData(responseData);

    setPageEnd(totalNumPages);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(currPage).catch((err) => {
      setError(err.message);
    });
  }, [currPage]);

  onLoad(isLoading);

  const listOfExs = resData.map((item) => (
    <ExchangeItem
      key={Math.random() + item}
      name={item.name}
      country={item.country}
      url={item.url}
      logo={item.image}
      trustRank={item.trust_score_rank}
      year={item.year_established}
    />
  ));

  if (isLoading) {
    return (
      <div className={classes.centered}>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <p> {error}</p>;
  }

  return <ul className={classes.exsList}>{listOfExs}</ul>;
}

export default Exchange;
