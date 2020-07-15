import React, {Component} from 'react';
import classnames from "classnames";
import {Checkbox} from "@blueprintjs/core";

import "./DMXCheckbox.css";

export class DMXCheckbox extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    const prevProps = this.props;
    return prevProps.selected !== nextProps.selected;
  }

  render() {
    const {title, items, selectedArray, selectedArrayID, onChange} = this.props;
    console.log("items selected", selectedArray, selectedArrayID);
    return (
      <div className="dmx-checkbox">
        {title && <div className="dmx-checkbox-title">{title}</div>}
        {items.map(d => (
          <div className="dmx-checkbox-item">
            <Checkbox
              label={d.name}
              className={classnames({"disabled": d.selected && selectedArray && selectedArray !== d.value})}
              disabled={d.selected && selectedArray && selectedArray !== d.value}
              onChange={event => onChange(event.currentTarget.checked, d.value, selectedArray, selectedArrayID)}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default DMXCheckbox
