import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "./Style";

import "./BuyCarousel.css";
import BuyProduct from "./BuyProduct";

const BuyCarousel = (props) => {
  if (!props.gods) return null;
  const active_button = "active_button";
  const disable_button = "disable_button";
  return (
    <div className="buy-container">
      <AwesomeSlider bullets={false} cssModule={AwesomeSliderStyles}>
        <div>
          <BuyProduct god={props.gods.god_1} button={active_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_2} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_3} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_4} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_5} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_6} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_7} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_8} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_9} button={disable_button} />
        </div>
        <div>
          <BuyProduct god={props.gods.god_10} button={disable_button} />
        </div>
      </AwesomeSlider>
    </div>
  );
};
export default BuyCarousel;
