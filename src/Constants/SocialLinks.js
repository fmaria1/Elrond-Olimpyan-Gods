import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

class SocialLinks extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <div className="social-links">
        <span>
          <FontAwesomeIcon
            className="icons"
            icon={faInstagram}
            onClick={() => window.open(this.props.data.instagram)}
          />
        </span>

        <span>
          <FontAwesomeIcon
            className="icons"
            icon={faTwitter}
            onClick={() => window.open(this.props.data.twitter)}
          />
        </span>

        <span>
          <FontAwesomeIcon
            className="icons"
            icon={faDiscord}
            onClick={() => window.open(this.props.data.discord)}
          />
        </span>
        <span>
          <FontAwesomeIcon
            className="icons"
            icon={faTelegram}
            onClick={() => window.open(this.props.data.telegram)}
          />
        </span>
      </div>
    );
  }
}
export default SocialLinks;
