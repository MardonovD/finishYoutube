import axios from "axios";
import React from "react";
import Header from "./Header.js";
import Iframe from "./Iframe.js";
import RightscrolView from "./RightscrolView.js";
import LeftScroll from "./LeftScroll.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      accoutImage: [],
      id: "",
    };
  }

  idniOlibKel = (id) => {
    this.setState({ id: id });
    console.log(this.state.id);
  };

  servergaMurojat = async (kalitsuz) => {
    const key = "AIzaSyBmDL0NCyq2ZBYwgVLLOWQqAk-CcvrPUXQ";

    let channelData = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet",
          id: "UCyLicD9UtfSo5t5_wPT7WHQ",
          key: key,
        },
      }
    );
    this.setState({ accoutImage: channelData });

    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 15,
          key: key,
          q: kalitsuz,
        },
      }
    );

    this.setState({ data: data });
  };

  showVideo = () => {
    if (this.state.id) {
      return (
        <div className="ui grid container">
          <div className="ui row">
            <div className="eight wide column ">
              <Iframe idBer={this.state.id} dataIframe={this.state.data} />
            </div>
            <div className="four wide column  scroll">
              <RightscrolView
                idOl={this.idniOlibKel}
                dataMalumot={this.state.data}
                idWiew={this.state.id}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header valueniOlibKel={this.servergaMurojat} />
          <div className="view">
            <LeftScroll accountRasmi={this.state.accoutImage} />
            {/* <RightscrolView /> */}
            <RightscrolView
              idOl={this.idniOlibKel}
              dataMalumot={this.state.data}
              idWiew={this.state.id}
            />
            {/* <Iframe  /> */}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="containerBig">
        <Header valueniOlibKel={this.servergaMurojat} />
        <div className="view">
          <LeftScroll accountRasmi={this.state.accoutImage} />
          {/* <RightscrolView
            idOl={this.idniOlibKel}
            dataMalumot={this.state.data}
          /> */}
          {/* <Iframe  /> */}
          {this.showVideo()}
        </div>
      </div>
    );
  }
}

export default App;
