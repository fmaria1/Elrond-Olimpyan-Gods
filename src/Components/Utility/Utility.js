import React, { Component } from "react";
import { Fade } from "react-reveal";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left";
import greekRight from "../../Images/right";
import {
  faGamepad,
  faSearch,
  faAward,
  faHandHoldingDollar,
  faHandHoldingHeart,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";

import "./Utility.css";
import Card from "./Card";

class Utility extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="utility">
        <Fade bottom duration={1200}>
          <div className="utility-title">
            <table>
              <tr>
                <td>
                  <GreekLeafs img={greekLeft} />
                </td>
                <td>{this.props.data.title}</td>
                <td>
                  <GreekLeafs img={greekRight} />
                </td>
              </tr>
            </table>
          </div>
        </Fade>
        <div className="utility-content">
          <div className="cards">
            <Card data={this.props.data.card1} icon={faGamepad} />
            <Card data={this.props.data.card2} icon={faHandHoldingHeart} />
            <Card data={this.props.data.card3} icon={faHandshakeAngle} />
            <Card data={this.props.data.card4} icon={faSearch} />
            <Card data={this.props.data.card5} icon={faAward} />
            <Card data={this.props.data.card6} icon={faHandHoldingDollar} />
          </div>
        </div>
      </section>
    );
  }
}

export default Utility;
