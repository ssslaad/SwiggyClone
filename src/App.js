import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./utils/constants";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body/>
    </div>
  )
}

rootElement.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
          <AppLayout />
    </GoogleOAuthProvider>
  </React.StrictMode>
);