import Exchange from "../components/Exchanges/Exchange";
import Pagination from "../components/Layout/Pagination";
import ExchangeProvider from "../store/ExchangeProvider";
import ExchangeDetail from "./ExchangeDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <ExchangeProvider>
      <Switch>
        <Route exact path="/">
          <Exchange />
          <Pagination />
        </Route>
        <Route path="/details/:exchange">
          {/* Error route to main*/}
          <ExchangeDetail />
        </Route>
      </Switch>
    </ExchangeProvider>
  );
}

export default App;
