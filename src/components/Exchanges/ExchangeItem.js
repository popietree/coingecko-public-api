import classes from "./ExchangeItem.module.css";
import { useHistory } from "react-router-dom";
import ExchangeContext from "../../store/exchange-context";
import { useContext } from "react";

const ExchangeItem = (props) => {
  const { currData } = useContext(ExchangeContext);
  const { setDetailClick } = useContext(ExchangeContext);
  const { detailClick } = useContext(ExchangeContext);

  const history = useHistory();

  const clickHandler = () => {
    const detailData = [];
    console.log("clicked in child");
    history.push(`/details/${props.name}`);

    for (const [i, ele] of currData.entries()) {
      if (currData[i].name === props.name) {
        console.log(currData[i].name === props.name);

        detailData.push({
          name: currData[i].name,
          country: currData[i].country,

          logo: currData[i].image,
          trustRank: currData[i].trust_score_rank,
          year: currData[i].year_established,
        });
      }
    }

    setDetailClick(detailData);
  };

  return (
    <div className={classes.container} onClick={clickHandler}>
      <p>Exchange: {props.name}</p>

      <div>
        <img src={props.logo} alt="coin logo" />
      </div>

      {/* BUG url click and routing back to details*/}

      <div>
        <a href={props.url}>{props.url}</a>
      </div>
      <p>Country: {props.country} </p>

      <p>Trust Rank: {props.trustRank}</p>
    </div>
  );
};

export default ExchangeItem;
