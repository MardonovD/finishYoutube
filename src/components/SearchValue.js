import React from "react";
import "../Style.css";
class SearchValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  submitBolgandaIshla = (e) => {
    e.preventDefault();
    this.props.endiSearchgaBor(this.state.value);
  };

  valueniOlish = (value) => {
    this.setState({ value: value.target.value });

    // console.log(this.state.value);
  };

  render() {
    return (
      <div className="containerSearch">
        <form onSubmit={this.submitBolgandaIshla}>
          <div className="inpSearch">
            <input
              onChange={this.valueniOlish}
              type="text"
              name="input"
              id=""
              className="prompt"
              placeholder="Search animals..."
            />
            <i className="search icon" id="search"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchValue;
