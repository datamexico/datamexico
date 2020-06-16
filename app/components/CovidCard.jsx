import React, {Component} from "react";
import PropTypes from "prop-types";
import {withNamespaces} from "react-i18next";
import {LinePlot} from "d3plus-react";

import DMXButtonGroup from "./DMXButtonGroup";
import DMXSelect from "./DMXSelect";

import "./CovidCard.css";

class CovidCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: this.props.selectOptions[0],
      groupValue: this.props.groupOptions[0]
    };
  }

  render() {
    const {t, description, selectOptions, groupOptions, graph} = this.props;
    const {selectValue, groupValue} = this.state;

    let viz = null;
    if (graph.type === "LinePlot") {
      viz =
        <LinePlot
          config={graph.config}
        />
    }

    return (
      <div className="covid-card-wrapper">
        <div className="covid-card covid-columns">
          <div className="covid-card-description covid-column-30">
            <h4 className="covid-card-description-headline">{description.headline}</h4>
            <h3 className="covid-card-description-title">{description.title}</h3>
            <div className="covid-card-description-selector">
              <DMXSelect
                callback={selectValue => this.setState({selectValue})}
                items={selectOptions}
                selectedItem={selectValue}
                title={t("CovidCard.Selector Name")}
                icon={"/"}
              />
            </div>
            <div className="covid-card-description-stat covid-stat">
              <img src="/" alt="stat-icon" />
              <div className="stat-text">
                <span className="stat">{description.stat.value}</span>
                <h5>{t("CovidCard.Stat ID")} <span className="id">{description.stat.id}</span></h5>
              </div>
            </div>
            <div className="covid-card-description-text">{description.text}</div>
            <div className="covid-card-description-source">
              <span>{t("CovidCard.Source")}</span>
              <h6>{description.source}</h6>
            </div>
          </div>
          <div className="covid-card-graph covid-column-70">
            <div className="covid-card-graph-box">
              <div className="covid-card-graph-box-header">
                <div className="covid-card-graph-box-header-text">
                  <h4>{graph.title}</h4>
                  <h3>{t("CovidCard.Graph Date")} {graph.date}</h3>
                </div>
                <div className="covid-card-graph-box-header-buttons">
                  <DMXButtonGroup
                    callback={groupValue => this.setState({groupValue})}
                    items={groupOptions}
                    selectedItem={groupValue}
                  />
                </div>
              </div>
              <div className="covid-card-graph-box-viz">
                {viz}
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

CovidCard.contextTypes = {
  router: PropTypes.object
};

export default withNamespaces()(CovidCard);
