import React, {Component} from 'react';
import PropTypes from "prop-types";
import {hot} from "react-hot-loader/root";
import {withNamespaces} from "react-i18next";

import "./About.css";

class Methodology extends Component {
  render() {
    const {t, press} = this.props;
    return (
      <div className="about-methodology">
        <h3>{t("AboutSite.methodology")}</h3>

      </div>
    )
  }
}

Methodology.contextTypes = {
  router: PropTypes.object
};

export default withNamespaces()(hot(Methodology));
