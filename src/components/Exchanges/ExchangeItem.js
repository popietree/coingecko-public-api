import classes from "./ExchangeItem.module.css";

const ExchangeItem = (props) => {
  console.log(props);
  return (
    <>
      <div className={classes.container}>
        <p>Exchange: {props.name}</p>

        <div>
          <img src={props.logo} alt="coin logo" />
        </div>

        <div>
          <a href={props.url}>{props.url}</a>
        </div>
        <p>Country: {props.country}</p>

        <p>Trust Rank: {props.trustRank}</p>
      </div>
    </>
  );
};

export default ExchangeItem;
