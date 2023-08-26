import React, { useEffect } from "react";
import Styles from "./DiceRoll.module.css";

function DiceRoll() {
  const combinations = [
    ["dots-middle"],
    ["dots-top-left", "dots-bottom-right"],
    ["dots-middle", "dots-top-left", "dots-bottom-right"],
    [
      "dots-bottom-left",
      "dots-top-left",
      "dots-bottom-right",
      "dots-top-right",
    ],
    [
      "dots-middle",
      "dots-bottom-left",
      "dots-top-left",
      "dots-bottom-right",
      "dots-top-right",
    ],
    [
      "dots-bottom-left",
      "dots-top-left",
      "dots-bottom-right",
      "dots-top-right",
      "dots-left-middle",
      "dots-right-middle",
    ],
  ];

  const randomNum = Math.floor(Math.random() * 6);

  return (
    <div className={Styles.dice}>
      {combinations[randomNum].map((combination, index) => (
        <div key={index} className={Styles[combination]}></div>
      ))}
    </div>
  );
}

export default DiceRoll;
