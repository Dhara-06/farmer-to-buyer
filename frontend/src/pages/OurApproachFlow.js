import React from "react";
import Flowchart from "react-simple-flowchart";

const chartCode = `
st=>start: Farmer Registers
op1=>operation: List Produce
op2=>operation: Buyer Browses
op3=>operation: Places Order
op4=>operation: Product Delivered
e=>end: Payment to Farmer

st->op1->op2->op3->op4->e
`;

const options = {
  x: 0,
  y: 0,
  "line-width": 3,
  "line-length": 50,
  "text-margin": 10,
  "font-size": 14,
  "font-color": "black",
  "line-color": "green",
  "element-color": "green",
  fill: "white",
  scale: 1,
  symbols: {
    start: {
      "font-color": "white",
      "element-color": "green",
      "font-weight": "bold",
      fill: "green",
    },
    end: {
      "font-color": "white",
      "element-color": "green",
      "font-weight": "bold",
      fill: "green",
    },
  },
};

function OurApproachFlow() {
  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h2 className="text-center text-success fw-bold mb-4">
        Our Approach
      </h2>
      <Flowchart chartCode={chartCode} options={options} />
    </div>
  );
}

export default OurApproachFlow;
