import React from "react";
import { Fade } from "react-reveal";
import "./BuyProduct";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left";
import greekRight from "../../Images/right";
import "./BuyComponent.css";
import BuyCarousel from "../BuyComponent/BuyCarousel";

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
      <Fade bottom duration={1000}>
        <div className="buy-content">
          <BuyCarousel gods={props.data.gods} />
        </div>
      </Fade>
    </section>
  );
};
export default BuyComponent;
