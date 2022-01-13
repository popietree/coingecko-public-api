import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Layout/Card';
import ExchangeContext from '../../store/exchange-context';
import classes from './DetailItem.module.css';

function DetailItem() {
  const { detailClick } = useContext(ExchangeContext);
  // ? social media links
  // ? description

  return (
    <div className={classes.container}>
      <div className={classes.linkMain}>
        <Link to="/">Back to main</Link>
      </div>
      <Card>
        <ul>
          <div>{detailClick[0].id}</div>
          <div>
            Exchange:
            {detailClick[0].name}
          </div>

          <div>
            <img src={detailClick[0].logo} alt="coin logo" />
          </div>
          <div>
            Year:
            {detailClick[0].year}
          </div>
          <div>
            Country:
            {detailClick[0].country}
          </div>

          <div>
            Trust Rank:
            {detailClick[0].trustRank}
          </div>
          {/* Need fecth social media site */}
          <a href={detailClick[0].url}>
            Social Media:
            {detailClick[0].url}
          </a>
          <div>Description: Cryto Exchange... </div>
        </ul>
      </Card>
    </div>
  );
}

export default DetailItem;
