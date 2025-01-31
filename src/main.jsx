import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import "../index.css";
import Body from "./components/Body/Body";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./utils/constants";
import AboutUs from "./components/AboutUs/AboutUs";
import Layout from "./Layout";
import User from "./components/User/User";

// const router = createBrowserRouter([
//     {
//       path:"/",
//       element: <Layout />,
//       children: [
//         {
//           path:"",
//           element: <Body />,
//         },
//         {
//           path:"/about",
//           element:<AboutUs />
//         }
//       ]
//     },
//   ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout/>} >
                  <Route 
                    index 
                    element={<Body />}
                    loader = () =>{

                    } 
                  />
                  <Route path="about" element={<AboutUs />} />
                  <Route path="department/:departmentId/user/:userId" element={<User />} />
                </Route>
              </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    </React.StrictMode>
);