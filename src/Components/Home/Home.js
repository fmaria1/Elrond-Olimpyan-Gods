import React, { Component } from "react";
import Intro from "./Intro";
import NavbarComponent from "./NavbarComponent/NavbarComponent";
import "./Home.css";

class Home extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <div className="home">
          <NavbarComponent data={this.props.data} />
          <Intro data={this.props.data} />
        </div>
      </header>
    );
  }
}

export default Home;
