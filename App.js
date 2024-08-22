const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "child1 h1" }, "I am child1 h1"),
    React.createElement("h2", { id: "child1 h2" }, "I am child1 h2"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

rootElement.render(parent);
