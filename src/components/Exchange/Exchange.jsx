/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable comma-dangle */
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
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const responseData = await response.json();

    const totalNumExs = response.headers.get('total');

    const totalNumPages = Math.ceil(totalNumExs / exsPerPage);

    const loadedExsData = [];

    // temp
    for (const id in responseData) {
      loadedExsData.push({
        key: responseData[id].name,
        name: responseData[id].name,
        country: responseData[id].country,
        url: responseData[id].url,
        logo: responseData[id].image,
        trustRank: responseData[id].trust_score_rank,
        year: responseData[id].year_established,
      });
    }
    // responseData.forEach((ele) => {
    //   loadedExsData.push({
    //     key: responseData[ele].name,
    //     name: responseData[ele].name,
    //     country: responseData[ele].country,
    //     url: responseData[ele].url,
    //     logo: responseData[ele].image,
    //     trustRank: responseData[ele].trust_score_rank,
    //     year: responseData[ele].year_established,
    //   });
    // });

    setResData(loadedExsData);
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
      key={item.id}
      name={item.name}
      country={item.country}
      url={item.url}
      logo={item.logo}
      trustRank={item.trustRank}
      year={item.year}
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
    return (
      <div>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <p> {error}</p>
      </div>
    );
  }

  return (
    <div>
      <ul>{listOfExs}</ul>
    </div>
  );
}

export default Exchange;
