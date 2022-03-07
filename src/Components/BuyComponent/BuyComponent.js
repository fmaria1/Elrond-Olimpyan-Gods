import React from "react";
import { Fade } from "react-reveal";
import "./BuyProduct";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left";
import greekRight from "../../Images/right";
import "./BuyComponent.css";
// import BuyProduct from "./BuyProduct";
// import AliceCarousel from "react-alice-carousel";
// import CarouselData from "../../Constants/Carousel";

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
        <div className="buy-product">
          <hr></hr>
          <p>TBA</p>
          <hr></hr>
        </div>
        {/* <div className="buy-carousel">
          <BuyProduct god={props.data.god_1} />
        </div>
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          items={CarouselData}
          // responsive={responsive}
          controlsStrategy="alternate"
          autoPlay={true}
          autoPlayInterval={3000}
          infinite
          autoPlayStrategy="none"
        /> */}
      </Fade>
    </section>
  );
};
export default BuyComponent;
