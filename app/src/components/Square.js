import React from "react";

export default class Square extends React.Component {
  render() {
    return (
      // square will access the `value` prop, which will be a number, through `this.props`
      // it will use handleClick to update the state in the parent component'
      // this is how you get child components pass up information, using functions
      <button className="square" onClick={() => this.props.handleClick(this.props.value)}>
        {this.props.value}
      </button>
    );
  }
}
