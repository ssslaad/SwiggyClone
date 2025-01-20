import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./utils/constants";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

{/* <div className="app">
      <Header></Header>
      <Body/>
    </div> */}

const AppLayout = () => {

  const responseMessage = (response) => {
    console.log(response);
  }

  const errorMessage = (error) =>{
    console.log(error);
  }

  return (
    <div className="app">
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
    </div>
  )
}
rootElement.render(
<GoogleOAuthProvider clientId={CLIENT_ID}>
  <React.StrictMode>
    <AppLayout/>
  </React.StrictMode>
</GoogleOAuthProvider>
);