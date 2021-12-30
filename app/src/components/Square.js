import React from "react";

// need to have props as a parameter for the functional component
export default function Square(props) {

    const handleClick = () => {
      console.log("clickity click")
    }


  // will access value through the `props` object
  return <button className="square" onClick={handleClick}>{props.value}</button>;
}
