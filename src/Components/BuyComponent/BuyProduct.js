import React from "react";
import "./BuyProduct.css";
import CountDownTimer from '../CountDownTimer/CountDownTimer';

const BuyProduct = (props) => {
  if (!props.god) return null;
  return (
    <div className="container">
      <div className="card">
        <div className="right">
          <img className="god-picture" src={props.god.picture} alt="god" />
          <div className="god-info">
            <h1 className="godName">{props.god.name}</h1>
            <h2><CountDownTimer startDate={new Date(props.god.startDate)} live={props.god.live} tba={props.god.tba}></CountDownTimer></h2>
            <div className="mint-button">
              <a
                className={props.button}
                href={props.god.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>MINT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyProduct;
