import React, {useState} from "react";

// need to have props as a parameter for the functional component
export default function Square(props) {
    const [value, setValue] = useState("")

    const handleClick = () => {
      console.log("clickity click")
      setValue("X")
    }


  // will access value through the `props` object
  return <button className="square" onClick={handleClick}>{value}</button>;
}
