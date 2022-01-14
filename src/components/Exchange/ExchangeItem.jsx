import React, { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import ExchangeContext from '../../store/exchange-context';
import Card from '../Layout/Card';
import classes from './ExchangeItem.module.css';
import useTrim from '../../hooks/useTrim';

function ExchangeItem(props) {
  const { currData } = useContext(ExchangeContext);
  const { setDetailClick } = useContext(ExchangeContext);
  const { name, trustRank } = props;
  const { country, logo, url } = props;

  const history = useHistory();

  const clickHandler = () => {
    // BUG: Detail Item needs data to display after url click
    history.replace(`/details/${name}`);

    const detailData = currData.find((item) => item.name === name);

    setDetailClick(detailData);
  };

  const linkHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <button type="button" className={classes.btnDiv} onClick={clickHandler}>
      <Card>
        <ul className={classes.exsList}>
          <ul className={classes.mainBox}>
            <div className={classes.exchName}>{name}</div>
            <div>
              <img src={logo} alt="coin logo" />
            </div>
            <div className={classes.anchor}>
              <a onClick={(e) => linkHandler(e)} href={url}>
                {useTrim(url)}
              </a>
            </div>
          </ul>
          <ul className={classes.infoBox}>
            <div>
              Country:
              {country}
            </div>

            <div>
              Trust Rank:
              {trustRank}
            </div>
          </ul>
        </ul>
      </Card>
    </button>
  );
}

export default ExchangeItem;
