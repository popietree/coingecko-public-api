import Exchange from "../components/Exchanges/Exchange";
import Pagination from "../components/Layout/Pagination";
import ExchangeProvider from "../store/ExchangeProvider";

function App() {
  //route pages

  return (
    <ExchangeProvider>
      <Exchange />
      <Pagination />
    </ExchangeProvider>
  );
}

export default App;
