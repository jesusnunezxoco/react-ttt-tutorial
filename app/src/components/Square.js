import React from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  handleClick = () => {
    console.log("clickkity click");
    this.setState({value: "X"})
  };

  render() {
    return (
      // square will access the `value` prop, which will be a number, through `this.props`
      <button className="square" onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  }
}
