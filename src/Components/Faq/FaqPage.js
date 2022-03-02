import React, { Component } from "react";
import { Slide, Fade } from "react-reveal";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left-removebg-preview.png";
import greekRight from "../../Images/right-removebg-preview.png";
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
        <Slide left duration={1300}>
          <div className="faq-content">
            <FaqComponent questions={this.props.data.questions} />
          </div>
        </Slide>
      </section>
    );
  }
}

export default FaqPage;
