import React from "react";
import "./BuyProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BuyProduct = (props) => {
  if (!props.god) return null;
  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <div className="slider">
            <i className="material-icons">
              <FontAwesomeIcon
                className="icons"
                icon={faArrowLeft}
                // onClick={() => window.open(this.props.data.instagram)}
              />
            </i>
          </div>
          <img
            className="wordmark"
            src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png"
            alt="star wars"
          />
        </div>
        <div className="right">
          <img className="helmet" src={props.god.picture} alt="helmet" />
          <div className="productInfo">
            <h1>{props.god.name}</h1>

            <div className="details">
              <div className="size"></div>
              <div className="durability"></div>
            </div>
            <a href={props.god.link} target="_blank" rel="noreferrer">
              MINT
            </a>

            <div className="slider">
              <i className="material-icons">
                <FontAwesomeIcon
                  className="icons"
                  icon={faArrowRight}
                  // onClick={() => window.open(this.props.data.instagram)}
                />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyProduct;
