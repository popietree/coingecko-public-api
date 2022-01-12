import { useState, useEffect } from "react";
import ExchangeItem from "./ExchangeItem";

const Exchange = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (pageNum) => {
    const url = `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=${pageNum}}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const responseData = await response.json();
    const totalExs = response.headers.get("total");

    const loadedExsData = [];

    for (const id in responseData) {
      loadedExsData.push({
        name: responseData[id].name,
        country: responseData[id].country,
        url: responseData[id].url,
        logo: responseData[id].image,
        trustRank: responseData[id].trust_score_rank,
      });
    }
    console.log(loadedExsData);
    console.log(totalExs);
  };

  //fetchData arg is page number

  useEffect(() => {
    fetchData(1).catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
    console.log("fire once");
  }, []);

  return (
    <>
      <ExchangeItem>Test</ExchangeItem>
    </>
  );
};

export default Exchange;
