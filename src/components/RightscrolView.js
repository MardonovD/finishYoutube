import React from "react";
import App from "./App";
import "../Style.css";

class RightscrolView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getIdClick = (val) => {
    this.props.idOl(val.id.videoId);
  };

  render() {
    return this.props.dataMalumot.data?.items.map((val) => {
      return (
        <div className="tush">
          <div className={this.props.idWiew ? "newClass" : "container2"}>
            <div className={this.props.idWiew ? "image-div" : "imageLeft"}>
              <img src={val.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
              <a
                href="#"
                onClick={() => {
                  this.getIdClick(val);
                }}
                className={this.props.idWiew ? "header-id" : "header"}
              >
                {val.snippet.title}
              </a>
              <div className="meta">
                <span className="date">{val.snippet.channelTitle}</span>
              </div>
              <div className={this.props.idWiew ? "" : "description"}>
                {val.snippet.publishTime}
              </div>
              <div className={this.props.idWiew ? "nonee" : ""}>
                {val.snippet.description}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default RightscrolView;
