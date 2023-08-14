// CircularProgressbar.js

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getColorForPercentage } from "../utils/getColorForPercentage";

const CustomCircularProgressbar = ({ percentage }) => {
  return (
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={8}
        styles={{
          root: {
            width: "50px",
            height: "50px",
            margin: "0 auto 10px",
            background: "#062441",
            borderRadius: "50%",
            position: "relative",
          },
          path: {
            stroke: getColorForPercentage(percentage),
            strokeLinecap: "butt",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          trail: {
            stroke: "white",
          },
          text: {
            fill: "white",
            fontSize: "30px",
            fontWeight: "bold",
            padding: "10px"
          },
        }}
      />
  );
};

export default CustomCircularProgressbar;
