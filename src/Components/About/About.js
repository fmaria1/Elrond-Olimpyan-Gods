import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import { Fade } from "react-reveal";
import "react-alice-carousel/lib/alice-carousel.css";
import "./About.css";
import CarouselData from "../../Constants/Carousel";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left-removebg-preview.png";
import greekRight from "../../Images/right-removebg-preview.png";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const title = this.props.data.title;
    const project_desc = this.props.data.project_desc;
    const responsive = {
      0: { items: 1 },
      320: { items: 2 },
      530: { items: 3 },
      650: { items: 4 },
      800: { items: 5 },
      1024: { items: 6 },
    };
    return (
      <section id="about">
        <Fade bottom duration={1200}>
          <div className="about-title">
            <table>
              <tr>
                <td>
                  <GreekLeafs img={greekLeft} />
                </td>
                <td>{title}</td>
                <td>
                  <GreekLeafs img={greekRight} />
                </td>
              </tr>
            </table>
          </div>
        </Fade>
        <Fade bottom duration={1200}>
          <div className="about-carousel">
            <hr className="hr-1" />
            <div className="about-text">{project_desc}</div>
            <hr className="hr-2" />
            <AliceCarousel
              disableButtonsControls
              mouseTracking
              items={CarouselData}
              responsive={responsive}
              controlsStrategy="alternate"
              autoPlay={true}
              autoPlayInterval={3000}
              infinite
              autoPlayStrategy="none"
            />
          </div>
        </Fade>
      </section>
    );
  }
}
export default About;
