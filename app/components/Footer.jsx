import React from "react";
import {withNamespaces} from "react-i18next";
import {Icon, InputGroup} from "@blueprintjs/core";

import {FOOTER_NAV, LOGOS} from "helpers/consts.js";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    const {t} = this.props;

    return <footer className="footer container">
      <div className="columns">
        <div className="column">

          <div className="footer-links">
            <nav className="footer-columns">
              <h2 className="u-visually-hidden">Site navigation</h2>
              {FOOTER_NAV.map(col =>
                <div className="footer-column" key={col.title}>
                  <h3 className="footer-heading display u-font-sm">{col.title}</h3>
                  <ul>
                    {col.items.map(link =>
                      <li key={link.title}>
                        <a href={link.url}>{link.title}</a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </nav>
          </div>

        </div>
        <div className="column footer-contact">
          <h3 className="u-font-sm">{t("Receive updates on news, datasets, and features?")}</h3>
          <InputGroup
            leftIcon="envelope"
            className="footer-email"
            placeholder="Your email address"
            rightElement={<button className="submit-button" onClick={() => console.log("hook me up carlos!")}>{t("Sign Up")}<Icon icon="arrow-right" /></button>}
          />

          {/* _gotta_ have them logos */}
          <div className="footer-logo-list" role="contentinfo">
            {LOGOS.map(logo =>
              <a className="footer-logo-link" href={logo.url} key={logo.title}>
                <img className="footer-logo-img" src={`/icons/${logo.src}`} alt={logo.title} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>;
  }
}

export default withNamespaces()(Footer);
