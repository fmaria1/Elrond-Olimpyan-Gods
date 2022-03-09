import React, { Component } from "react";
import { Fade } from "react-reveal";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left";
import greekRight from "../../Images/right";
import FaqComponent from "./FaqComponent";
import "./FaqPage.css";

class FaqPage extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="faq">
        <Fade bottom duration={1200}>
          <div className="faq-title">
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
        <Fade left duration={800}>
          <div className="faq-content">
            <FaqComponent questions={this.props.data.questions} />
          </div>
        </Fade>
      </section>
    );
  }
}

export default FaqPage;
