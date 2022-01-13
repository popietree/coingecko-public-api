import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DetailItem from '../components/Exchange/DetailItem';

// will display the exchange details that was clicked by a new fetch of the exhange clicked
// click handler get event.target then fetch exchange detail individaully
// Route to page have styles for exhange
function ExchangeDetail() {
  // const match = useRouteMatch();
  const { exchange } = useParams();

  return (
    // default error comp
    <>
      <Link to={`/detail/${exchange}`} />
      <DetailItem id={exchange} />
    </>
  );
}

export default ExchangeDetail;