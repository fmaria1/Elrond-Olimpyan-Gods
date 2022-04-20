import "./CountDownTimer.css";
import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    const { live } = this.props;
    const { tba } = this.props;

    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ live: false, tba: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        live: true,
        tba: false
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, live: live, tba: tba });
  };

  render() {
    const { days, hours, minutes, seconds, live, tba } = this.state;
    if (tba) {
        return (
            <div className="timer-container">
                <div className="timer-text">Mint starts in:</div>
                <div className="live">TBA !</div>
            </div>
        );
    }
    if (live) {
        return (
            <div className="timer-container">
                <div className="live">LIVE !</div>
            </div>
        );
    }
    return (  
     <div className="timer-container">   
      <div className="timer-text">Mint starts in:</div>
      <div className="timer">
        <div>
          <div className="color-text-timer">{days}</div>
          <span>d</span>
        </div>
        <div>
        <div className="color-text-timer">{hours}</div>
          <span>h</span>
        </div>
        <div>
        <div className="color-text-timer">{minutes}</div>
          <span>m</span>
        </div>
        <div>
        <div className="color-text-timer">{seconds}</div>
          <span>s</span>
        </div>
      </div>
     </div>
    );
  }
}
export default Timer;
