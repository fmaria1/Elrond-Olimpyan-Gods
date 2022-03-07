import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./UseOfFunds.css";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left";
import greekRight from "../../Images/right";
import PieChart from "./PieChart";

class UseOfFunds extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="useOfFunds">
        <Fade bottom duration={1200}>
          <div className="about-title">
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
        <div className="useOfFunds-content">
          <PieChart />
        </div>
      </section>
    );
  }
}

export default UseOfFunds;
