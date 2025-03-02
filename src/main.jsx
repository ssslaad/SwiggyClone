import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "../index.css";
import Body from "./components/Body/Body";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./utils/constants";
import AboutUs from "./components/AboutUs/AboutUs";
import Layout from "./Layout";
import User from "./components/User/User";
import RestaurantMenuCard from "./components/RestaurantMenuCard/RestaurantMenuCard";
import {
  restaurantAndCuisineLoader,
  restaurantMenuLoader,
} from "./utils/RestaurantAndCuisineLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Body />,
        loader: restaurantAndCuisineLoader,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantMenuCard />,
        loader: restaurantMenuLoader,
      },
      {
        path: "department/:departmentId/user/:userId",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
