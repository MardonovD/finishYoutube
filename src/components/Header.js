import React from "react";
import SearchValue from "./SearchValue.js";
import "../Style.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="containerHeader" id="ulcham">
        <div className="IconYOUTUBE">
          <i className="align justify icon" id="ulcham"></i>
          <div className="yutubIcon">
            <i
              className="youtube icon"
              id="ulcham"
              style={{ color: "red", fontSize: "30px" }}
            ></i>
            <b className="youTube">YOUTUBE</b>
          </div>
        </div>
        <div className="searchDiv">
          <SearchValue endiSearchgaBor={this.props.valueniOlibKel} />
        </div>
        <div className="rgihtHeader">
          <i className="video icon" id="ulcham"></i>
          <i className="chess board icon" id="ulcham"></i>
          <i className="bell outline icon" id="ulcham"></i>
          <i className="user icon" id="ulcham"></i>
        </div>
      </div>
    );
  }
}

export default Header;
