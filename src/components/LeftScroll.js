import React from "react";
import "../Style.css";
class LeftScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.accountRasmi);
  }

  render() {
    return (
      <div className="leftScroll">
        <div className="iconLeft">
          <i className="home icon" id="ulcham"></i>
          <p>Glavniy</p>
        </div>
        <div className="iconLeft">
          <i className="tags icon" id="ulcham"></i>
          <p>Navigator</p>
        </div>
        <div className="iconLeft">
          <i className="compass outline icon" id="ulcham"></i>
          <p>Shorts</p>
        </div>
        <div className="iconLeft">
          <i className="server icon" id="ulcham"></i>
          <p>Podpiski</p>
        </div>

        <div className="line"></div>
        <div className="iconLeft">
          <i className="th list icon" id="ulcham"></i>
          <p>Bibloteka</p>
        </div>
        <div className="iconLeft">
          <i className="history icon" id="ulcham"></i>
          <p>Istoriya</p>
        </div>
        <div className="iconLeft">
          <i className="stopwatch icon" id="ulcham"></i>
          <p>Smotret</p>
        </div>
        <div className="iconLeft">
          <i className="thumbs up outline icon" id="ulcham"></i>
          <p>Podpiski</p>
        </div>

        <div className="podpiska">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default LeftScroll;
