import React, { Component } from "react";
import Fade from "react-reveal";
import "./Roadmap.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CheckIcon from "../../Constants/CheckIcon";
import TbaIcon from "../../Constants/TbaIcon";
import GreekLeafs from "../../Constants/GreekLeafs";
import greekLeft from "../../Images/left";
import greekRight from "../../Images/right";

class Roadmap extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <section id="roadmap">
        <Fade duration={1000}>
          <div className="roadmap-title">
            {/* <h1>{this.props.data.title}</h1> */}
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
        <div className="roadmap-container">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="roadmap-q"
              contentStyle={{
                background: "black",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              contentArrowStyle={{
                borderRight: "10px solid  black",
              }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-q-title">{this.props.data.q1}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-element-title">{this.props.data.q1_1}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              icon={<CheckIcon />}
            >
              <h4 className="roadmap-element-title">{this.props.data.q1_2}</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-element-title">{this.props.data.q1_3}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-element-title">{this.props.data.q1_4}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-element-title">{this.props.data.q1_5}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              iconStyle={{ background: "black", color: "#fff" }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-element-title">{this.props.data.q1_6}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-q"
              contentStyle={{
                background: "black",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              contentArrowStyle={{
                borderRight: "10px solid  black",
              }}
              iconStyle={{ background: "black", color: "#fff" }}
              icon={<CheckIcon />}
            >
              <h3 className="roadmap-q-title">{this.props.data.q2}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              // icon={<CheckIcon />}
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3 className="roadmap-element-title">{this.props.data.q2_1}</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3 className="roadmap-element-title">{this.props.data.q2_2}</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="roadmap-element "
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3 className="roadmap-element-title">{this.props.data.q2_3}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="roadmap-element"
              contentStyle={{
                background: "#fff6ee",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3 className="roadmap-element-title">{this.props.data.q2_4}</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="roadmap-q"
              contentStyle={{
                background: "black",
                borderRadius: "20px ",
                blockSize: "60px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  black",
              }}
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3 className="roadmap-q-title">{this.props.data.q3}</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement icon={<TbaIcon />} />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Roadmap;
