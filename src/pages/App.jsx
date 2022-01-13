import React, { Switch, Route } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Exchange from '../components/Exchange/Exchange';
import Pagination from '../components/Layout/Pagination';
import ExchangeProvider from '../store/ExchangeProvider';
import ExchangeDetail from './ExchangeDetail';

function App() {
  // lift loading state
  const [isLoading, setIsLoading] = useState();
  const handleLoad = (loadState) => {
    setIsLoading(loadState);
  };

  return (
    <ExchangeProvider>
      <Switch>
        <Route exact path="/">
          <Exchange onLoad={handleLoad} />
          {!isLoading && <Pagination />}
        </Route>
        <Route path="/details/:exchange">
          {/* Error route to main */}
          <ExchangeDetail />
        </Route>
      </Switch>
    </ExchangeProvider>
  );
}

export default App;
