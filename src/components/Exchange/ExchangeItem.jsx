/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable comma-dangle */

import React, { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import ExchangeContext from '../../store/exchange-context';
import Card from '../Layout/Card';
import classes from './ExchangeItem.module.css';

function ExchangeItem(props) {
  const { currData } = useContext(ExchangeContext);
  const { setDetailClick } = useContext(ExchangeContext);
  const { name, trustRank } = props;
  const { country, logo, url } = props;

  const history = useHistory();

  const clickHandler = () => {
    const detailData = [];
    // BUG: Detail Item needs data to display after url click
    history.replace(`/details/${name}`);

    // eslint-disable-next-line no-restricted-syntax
    for (const [i, ele] of currData.entries()) {
      if (currData[i].name === props.name) {
        detailData.push({
          name: currData[i].name,
          country: currData[i].country,
          url: currData[i].url,
          logo: currData[i].image,
          trustRank: currData[i].trust_score_rank,
          year: currData[i].year_established,
        });
      }
    }

    // currData.forEach((ele, i) => {
    //   if (currData[i].name === name) {
    //     // console.log(currData[i].name === name);

    //     detailData.push({
    //       name: currData[i].name,
    //       country: currData[i].country,
    //       url: currData[i].url,
    //       logo: currData[i].image,
    //       trustRank: currData[i].trust_score_rank,
    //       year: currData[i].year_established,
    //     });
    //   }
    // });

    setDetailClick(detailData);
  };

  return (
    <Card>
      <button type="button" className={classes.btnDiv} onClick={clickHandler}>
        <ul>
          <div>
            Exchange:
            {name}
          </div>

          <div className={classes.urlLink}>
            <img src={logo} alt="coin logo" />
          </div>

          <div>
            Country:
            {country}
          </div>

          <div>
            Trust Rank:
            {trustRank}
          </div>
        </ul>
      </button>
      <div className={classes.anchor}>
        <a href={url}>{url}</a>
      </div>
    </Card>
  );
}

export default ExchangeItem;
