import React from "react";

class Iframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.idBer ? "iframe" : ""}>
        <iframe
          width="700"
          height="450"
          src={`https://www.youtube.com/embed/${this.props.idBer}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="iframeDeskription">
          <p></p>
        </div>
      </div>
    );
  }
}

export default Iframe;


