import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import BuyComponent from "./Components/BuyComponent/BuyComponent";
import Roadmap from "./Components/Roadmap/Roadmap";
import Utility from "./Components/Utility/Utility";
import Artist from "./Components/Artist/Artist";
import FaqPage from "./Components/Faq/FaqPage";
import UseOfFunds from "./Components/UseOfFunds/UseOfFunds";
import Video from "./Components/Video/Video";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Video />
        <Home data={this.state.resumeData.main} />
        <About data={this.state.resumeData.about} />
        <BuyComponent data={this.state.resumeData.mint} />
        <Roadmap data={this.state.resumeData.roadmap} />
        <Utility data={this.state.resumeData.utility} />
        <UseOfFunds data={this.state.resumeData.useOfFunds} />
        <Artist data={this.state.resumeData.artist} />
        <FaqPage data={this.state.resumeData.faq} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
