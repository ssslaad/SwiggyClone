import { useParams } from "react-router";
import { SWIGGY_GET_DATA_API, GET_RESTAURANT_MENU } from "./constants";

export const restaurantAndCuisineLoader = async () => {
  const cacheKey = "restaurantAndCuisineData";
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const fetchedData = await fetch(SWIGGY_GET_DATA_API);
  const fetchedJson = await fetchedData.json();
  console.log("cached Data for restaurants and cuisines loader", fetchedJson);
  const popularRestaurantsList =
    fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const cuisinesList =
    fetchedJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;

  const data = {
    popularRestaurantsList,
    cuisinesList,
  };

  sessionStorage.setItem(cacheKey, JSON.stringify(data));

  return data;
};

export const restaurantMenuLoader = async (parameters) => {
  const cacheKey = `restaurantMenuData_${parameters.params.restaurantId}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  const fetchedData = await fetch(
    GET_RESTAURANT_MENU + parameters.params.restaurantId
  );

  const fetchedJson = await fetchedData.json();
  const restaurantMenu = fetchedJson?.data;
  localStorage.setItem(cacheKey, JSON.stringify(restaurantMenu));
  return restaurantMenu;
};
