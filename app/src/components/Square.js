import React from "react";

// need to have props as a parameter for the functional component
export default function Square(props) {
  // will access value through the `props` object
  return <button className="square">{props.value}</button>;
}
