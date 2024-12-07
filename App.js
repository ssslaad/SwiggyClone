import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/HeaderComponent";
import Body from "./Components/Body/BodyComponent";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React! 🚀🚀"
// );

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body/>
    </div>
  )
}
rootElement.render(<AppLayout/>);