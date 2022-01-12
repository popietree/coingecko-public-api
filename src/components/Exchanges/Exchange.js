import { useState, useEffect } from "react";
import ExchangeItem from "./ExchangeItem";
import classes from "./Exchange.module.css";

const Exchange = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [numExs, setNumExs] = useState();

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
    setNumExs(totalExs);

    const loadedExsData = [];

    for (const id in responseData) {
      loadedExsData.push({
        key: responseData[id].name,
        name: responseData[id].name,
        country: responseData[id].country,
        url: responseData[id].url,
        logo: responseData[id].image,
        trustRank: responseData[id].trust_score_rank,
      });
    }

    setData(loadedExsData);
  };

  useEffect(() => {
    fetchData(1).catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
    console.log("fire once");
  }, []);
  // console.log(data);
  console.log(numExs);

  const listOfExs = data.map((item) => (
    <ExchangeItem
      key={item.id}
      name={item.name}
      country={item.country}
      url={item.url}
      logo={item.logo}
      trustRank={item.trustRank}
    ></ExchangeItem>
  ));

  let content = listOfExs;
  if (isLoading) {
    return (
      <section>
        <p> Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <p> {error}</p>
      </section>
    );
  }

  return (
    <section>
      <ul>{listOfExs}</ul>
    </section>
  );
};

export default Exchange;
