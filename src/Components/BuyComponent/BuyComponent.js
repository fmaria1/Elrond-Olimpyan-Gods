import React from "react";
import { Slide, Fade } from "react-reveal";
import "./BuyProduct";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left-removebg-preview.png";
import greekRight from "../../Images/right-removebg-preview.png";
import "./BuyComponent.css";
// import BuyProduct from "./BuyProduct";

const BuyComponent = (props) => {
  if (!props.data) return null;
  return (
    <section id="buy">
      <Fade bottom duration={1200}>
        <div className="buy-title">
          <table>
            <tr>
              <td>
                <GreekLeafs img={greekLeft} />
              </td>
              <td>{props.data.title}</td>
              <td>
                <GreekLeafs img={greekRight} />
              </td>
            </tr>
          </table>
        </div>
      </Fade>
      <Slide left duration={1300}>
        <div className="buy-product">
          <hr></hr>
          <p>TBA</p>
          <hr></hr>
        </div>
        {/* <div className="buy-carousel">
          <BuyProduct />
        </div> */}
      </Slide>
    </section>
  );
};
export default BuyComponent;
