import React, { Component } from "react";
import SocialLinks from "../../Constants/SocialLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    const socials = this.props.data.socials;
    const footer = this.props.data.footer;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <SocialLinks data={socials} />
            </ul>

            <ul className="copyright">
              <li>&copy; {footer.copyright}</li>
              <li>
                {footer.design}
                <a href={footer.dev_link} target="_blank" rel="noreferrer">
                  <b> {footer.dev_name}</b>
                </a>
              </li>
            </ul>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
