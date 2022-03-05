import React, { Component } from "react";
import Fade from "react-reveal";
import Gallery from "../../Constants/Gallery";
import "./Intro.css";

class Intro extends Component {
  render() {
    if (!this.props.data) return null;
    const name = this.props.data.name;
    const intro_description = this.props.data.intro_description;
    const quote = this.props.data.quote;
    return (
      <div className="intro-container">
        <div className="intro-text">
          <Fade bottom>
            <h1>{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{intro_description}</h3>
            <br />
            <span>
              <h3>
                <i>"{quote}"</i> - SOPHOCLES
              </h3>
            </span>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <div className="buy-functionality">
              <a className="mint-button" href="#buy">
                <span>MINT</span>
              </a>
            </div>
          </Fade>
          <div className="intro-galary">
            <Gallery />
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
