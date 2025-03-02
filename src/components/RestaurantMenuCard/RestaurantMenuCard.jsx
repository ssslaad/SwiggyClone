import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { GET_RESTAURANT_MENU } from "../../utils/constants";

function RestaurantMenuCard() {
  const restaurantMenuData = useLoaderData();
  return (
    <>
      <h1>{restaurantMenuData?.cards?.[0]?.card?.card?.text}</h1>
      <h2>Hello</h2>
    </>
  );
}

export default RestaurantMenuCard;
