import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DetailItem from '../components/Exchange/DetailItem';

function ExchangeDetail() {
  const { exchange } = useParams();

  return (
    <>
      <Link to={`/detail/${exchange}`} />
      <DetailItem id={exchange} />
    </>
  );
}

export default ExchangeDetail;
