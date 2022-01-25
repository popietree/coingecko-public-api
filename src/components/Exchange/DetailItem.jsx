import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../Layout/Card';
import ExchangeContext from '../../store/exchange-context';
import classes from './DetailItem.module.css';
import useTrim from '../../hooks/useTrim';

function DetailItem() {
  const history = useHistory();
  const { detailClick } = useContext(ExchangeContext);
  const clickHandler = () => {
    // temp back button fix
    history.push('/');
  };
  return (
    <div className={classes.container}>
      <div className={classes.linkMain}>
        <Link to="/">
          <button className={classes.btnBack} type="button">
            Back to main
          </button>
        </Link>
      </div>
      <Card>
        <ul>
          <div className={classes.exchName}>{detailClick.name}</div>

          <div>
            <img src={detailClick.image} alt="coin logo" />
          </div>
          <div>Description: Cryto Exchange... </div>
          <div>
            Established:
            {detailClick.year_established}
          </div>
          <div>
            Country:
            {detailClick.country}
          </div>

          <div>
            Trust Rank:
            {detailClick.trust_score_rank}
          </div>

          <a onClick={clickHandler} href={detailClick.url}>
            Site:
            {useTrim(detailClick.url)}
          </a>
        </ul>
      </Card>
    </div>
  );
}

export default DetailItem;
