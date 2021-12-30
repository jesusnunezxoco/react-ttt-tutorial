import React from "react";

export default class Square extends React.Component {
  render() {
    return (
      // square will access the `value` prop, which will be a number, through `this.props`
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}