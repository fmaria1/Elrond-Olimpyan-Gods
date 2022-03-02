import React, { Component } from "react";
import "./ProfileCard.css";
import SocialButton from "./SocialButton";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="card-avatar">
          <img src={this.props.image} alt="" />
        </div>
        <div className="card-details">
          <div className="profile-name">{this.props.name}</div>

          <div className="profile-link">
            <table>
              <tr>
                <td className="item">
                  <SocialButton
                    button={this.props.button1}
                    text={this.props.social1}
                    icon={this.props.icon1}
                  />
                </td>
                <td className="item">
                  <SocialButton
                    button={this.props.button2}
                    text={this.props.social2}
                    icon={this.props.icon2}
                  />
                </td>
                <td className="item">
                  <SocialButton
                    button={this.props.button3}
                    text={this.props.social3}
                    icon={this.props.icon3}
                  />
                </td>
                <td className="item">
                  <SocialButton
                    button={this.props.button4}
                    text={this.props.social4}
                    icon={this.props.icon4}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="profile-desc">
            <span>{this.props.desc}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
