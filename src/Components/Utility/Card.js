import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <div className="card">
        <table>
          <tr>
            <td className="card-icons">
              <FontAwesomeIcon icon={this.props.icon} />
            </td>
            <td>
              <h2 className="card-title">{this.props.data.title}</h2>
            </td>
          </tr>
        </table>

        <p className="card-desc">{this.props.data.desc}</p>
      </div>
    );
  }
}

export default Card;
