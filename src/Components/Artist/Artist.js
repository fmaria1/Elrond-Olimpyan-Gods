import React, { Component } from "react";
import { Slide, Fade } from "react-reveal";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left-removebg-preview.png";
import greekRight from "../../Images/right-removebg-preview.png";
import ProfileCard from "./ProfileCard";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import artistImg from "../../Images/LarisaK.jpg";
import "./Artist.css";

class Artist extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="artist">
        <div className="artist-container">
          <Fade bottom duration={1200}>
            <div className="artist-title">
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
            <div className="artist-content">
              <ProfileCard
                name={this.props.data.artist_name}
                desc={this.props.data.artist_desc}
                image={artistImg}
                button1={this.props.data.artist_link}
                social1={this.props.data.artist_social}
                icon1={faTwitter}
              />
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Artist;
