import ExchangeContext from "./exchange-context";
import { useState, useEffect } from "react";

const ExchangeProvider = (props) => {
  const setPage = (page) => {
    setState({ ...state, page: page });
  };

  const initState = {
    language: "en",
    setLanguage: setLanguage,
  };

  const [state, setState] = useState(initState);

  const exchangeContext = {
    page: "page",
  };

  return (
    <ExchangeContext.Provider value={exchangeContext}>
      {props.children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;

// const [data, setData] = useState([]);
// const [error, setError] = useState(null);
// const [isLoading, setIsLoading] = useState(false);

// const page = 2;
// const url = `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=${page}`;

// const sendRequest = async () => {
//   try {
//     setIsLoading(true);
//     setError(null);

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Something went wrong");
//     }

//     const data = await response.json();
//     setData(data);
//     console.log(data);
//   } catch (error) {
//     setError(error.message || "Something went wrong");
//   }
//   setIsLoading(false);
// };

// useEffect(() => {
//   sendRequest();
// }, []);

// const exchangeContext = {
//   exchangeData: data,
// };
