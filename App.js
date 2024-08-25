import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React! 🚀🚀"
// );

const HeadingComponent = (props) => {
  return <h1 className="heading">
    {props.children}
  </h1>
}

const myComponent = 
<div id="component">
  <HeadingComponent>
    Hello World from React And JSX 🚀
  </HeadingComponent>
</div>;

rootElement.render(myComponent);

const MyComponent = () => (
  <div id="component">
    <HeadingComponent>
      Hello World from React And JSX 🚀
    </HeadingComponent>
  </div>
);

rootElement.render(<MyComponent/>);