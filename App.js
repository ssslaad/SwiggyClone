import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "child1 h1" }, "Learning React 🚀"),
    React.createElement("h2", { id: "child1 h2" }, "From Namaste React by Akshay Saini"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

rootElement.render(parent);