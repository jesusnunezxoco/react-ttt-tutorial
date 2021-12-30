import React from "react";

export default class Square extends React.Component {

  handleClick = () => {
    console.log("clickkity click")
  }

  render() {
    return (
      // square will access the `value` prop, which will be a number, through `this.props`
      <button className="square" onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}