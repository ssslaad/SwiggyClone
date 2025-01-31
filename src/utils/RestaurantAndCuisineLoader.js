import { SWIGGY_GET_DATA_API } from "./constants";

export const restaurantAndCuisineLoader = async () => {

    console.log("restaurantAndCuisineLoader called");

    const cacheKey = 'restaurantAndCuisineData';
    const cachedData = sessionStorage.getItem(cacheKey);    
    if(cachedData){
        return JSON.parse(cachedData);
    }

    const fetchedData = await fetch(SWIGGY_GET_DATA_API);
    const fetchedJson = await fetchedData.json();
    
    const popularRestaurantsList = fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const cuisinesList = fetchedJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    const data = {
        popularRestaurantsList,
        cuisinesList
    }

    sessionStorage.setItem(cacheKey,JSON.stringify(data));

    return data;
}