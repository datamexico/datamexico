import React from "react";

import "./SearchResult.css";

class SearchResult extends React.Component {
  render() {
    const {id, slug, title, level} = this.props;

    return <li className="search-result">
      <a href={`/profile/${slug}/${id}`}>
        <div className="result-icon">
          {slug && <img className="icon" src={`/icons/dimensions/${slug}_color.svg`} alt=""/>}
        </div>
        <div className="result-text">
          <div className="title">{title}</div>
          <div className="level-title">{level}</div>
        </div>
      </a>
    </li>;
  }
}

SearchResult.defaultProps = {
  icon: undefined
};

export default SearchResult;
