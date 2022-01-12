import Card from "../Layout/Card";
import { useContext } from "react";
import ExchangeContext from "../../store/exchange-context";
import { Link } from "react-router-dom";
//will display the exchange details that was clicked by a new fetch of the exhange clicked
// click handler get event.target then fetch exchange detail individaully
// Route to page have styles for exhange

// Details name, country, trust rank, logo, year of establishment
//back-to-main-page button.

//? social media links
//? description

const DetailItem = (props) => {
  const { detailClick } = useContext(ExchangeContext);
  //fetch the data from context?
  // console.log(detailClick[0].country);

  return (
    <Card>
      <div>{detailClick[0].id}</div>
      <p>Exchange: {detailClick[0].name}</p>
      <div>
        <img src={detailClick[0].logo} alt="coin logo" />
      </div>
      <p>Year: {detailClick[0].year} </p>
      <p>Country: {detailClick[0].country} </p>

      <p>Trust Rank: {detailClick[0].trustRank} </p>
    </Card>
  );
};

export default DetailItem;
