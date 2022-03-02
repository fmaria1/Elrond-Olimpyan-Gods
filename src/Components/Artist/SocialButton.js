import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialButton.css";

const SocialButton = (props) => {
  if (!props.button) return null;
  if (!props.text) return null;
  return (
    <div class="social-button">
      <a href={props.button} target="_blank" rel="noreferrer">
        <table>
          <tr>
            <td>
              <FontAwesomeIcon className="icons" icon={props.icon} />
            </td>
            <td>{props.text}</td>
          </tr>
        </table>
      </a>
    </div>
  );
};
export default SocialButton;
