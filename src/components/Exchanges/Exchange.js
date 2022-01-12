import { useState, useEffect, useContext } from "react";
import ExchangeItem from "./ExchangeItem";
import classes from "./Exchange.module.css";
import ExchangeContext from "../../store/exchange-context";
import { useHistory } from "react-router-dom";

const Exchange = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalNumExs, setTotalNumExs] = useState();
  const history = useHistory();
  const { currPage } = useContext(ExchangeContext);

  const { pageEnd } = useContext(ExchangeContext);
  const { setPageEnd } = useContext(ExchangeContext);
  const [resData, setResData] = useState([]);
  const { currData, setCurrData } = useContext(ExchangeContext);

  const fetchData = async (pageNum) => {
    const exsPerPage = 10;
    const url = `https://api.coingecko.com/api/v3/exchanges?per_page=${exsPerPage}&page=${pageNum}`;
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
    console.log(responseData);

    const totalNumExs = response.headers.get("total");

    // get total number of displayed pages by dividing total number of exchanges by number exchanges per page (10)
    const totalNumPages = Math.ceil(totalNumExs / exsPerPage);

    const loadedExsData = [];

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
    setResData(loadedExsData);
    setCurrData(responseData);
    setPageEnd(totalNumPages);
  };

  useEffect(() => {
    fetchData(currPage).catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });

    console.log("fire once");
  }, [currPage]);
  console.log(currData);
  console.log(pageEnd);

  //need working anchor url under div click
  const clickHandler = () => {
    //display DetailItem
    console.log("clicked");
    history.push(`/detail/ee`);
  };

  const listOfExs = resData.map((item) => (
    <ExchangeItem
      key={item.id}
      name={item.name}
      country={item.country}
      url={item.url}
      logo={item.logo}
      trustRank={item.trustRank}
      year={item.year}
      onClick={clickHandler}
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
