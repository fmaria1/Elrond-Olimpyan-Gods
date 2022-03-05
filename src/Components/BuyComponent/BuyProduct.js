import React from "react";
import "./BuyProduct.css";
const BuyProduct = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <div className="slider">
            <i className="material-icons">arrow_back</i>
          </div>
          <img
            className="wordmark"
            src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png"
            alt="star wars"
          />
        </div>
        <div className="right">
          <img
            className="helmet"
            src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png"
            alt="helmet"
          />
          <div className="productInfo">
            <h1>STORMTROOPER </h1>
            <h2>$1,299.99</h2>
            <div className="details">
              <div className="size">
                <h4>HELMET SIZE</h4>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
              <div className="durability">
                <h3>75%</h3>
                <h4>DURABILITY </h4>
              </div>
            </div>
            <button>ADD TO CART</button>
            <i className="material-icons fav">favorite</i>

            <div className="slider">
              <i className="material-icons">arrow_forward</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyProduct;
