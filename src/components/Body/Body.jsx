import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerRestaurantCard from "../RestaurantCard/ShimmerRestaurantCard";
import { SWIGGY_GET_DATA_API } from "../../utils/constants";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerCuisineCard from "../CuisineCard/ShimmerCuisineCard";
import { useRestaurantFilters } from "../../custom-hooks/RestaurantFilterHook";
import { SearchAndFilters } from "../SearchAndFilters/SearchAndFilters";

export default function Body() {
  const [popularRestaurantsList, setPopularRestaurantsList] = useState([]);
  const [cuisinesList, setCuisinesList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const {
    filters,
    filteredRestaurants,
    toggleTopRatedFilter,
    toggleLowPricedFilter,
    handleInputChange,
  } = useRestaurantFilters(popularRestaurantsList);

  const fetchData = async (api) => {
    try {
      const fetchedData = await fetch(api);
      const fetchedJson = await fetchedData.json();
      const popularRestaurantsList =
        fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const cuisineCards =
        fetchedJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      setPopularRestaurantsList(popularRestaurantsList);
      setCuisinesList(cuisineCards);
    } catch (error) {
      console.error(error);
    } finally {
      setDataLoaded(true);
    }
  };

  // will get called when my component is rendered
  useEffect(() => {
    fetchData(SWIGGY_GET_DATA_API);
  }, []);

  // show shimmer UI when data is not loaded
  if (!dataLoaded) {
    return (
      <div className="w-[90%] md:w-[85%] self-center mx-auto my-1">
        <div className="my-4 w-full">
          <div className="w-[80%] p-3 flex gap-x-4">
            {/* Show multiple shimmer restaurant cards */}
            {[...Array(5)].map((_, index) => (
              <ShimmerRestaurantCard key={index} />
            ))}
          </div>
        </div>

        <div className="my-4">
          <div className="w-80% p-3 flex gap-x-5 items-center">
            {/* Show multiple shimmer restaurant cards */}
            {[...Array(8)].map((_, index) => (
              <ShimmerCuisineCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // content to be shown for popular restaurants div
  let content;
  if (filteredRestaurants.length === 0) {
    content = <h4>No Popular Restaurant found for your search</h4>;
  } else {
    content = filteredRestaurants.map((restaurant) => {
      return (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      );
    });
  }

  return (
    <div className="w-[90%] md:w-[85%] self-center mx-auto my-1">
      <SearchAndFilters
        filters={filters}
        toggleTopRatedFilter={toggleTopRatedFilter}
        toggleLowPricedFilter={toggleLowPricedFilter}
        handleInputChange={handleInputChange}
      />

      <div className="my-4 w-full">
        <h1 className="md:mb-2 text-md md:text-2xl">
          Popular Restaurants In Pune
        </h1>
        <div
          className="p-3 flex overflow-x-scroll 
          [&::-webkit-scrollbar]:h-1.75 [&::-webkit-scrollbar]:rounded-full [&::-webkit-scrollbar]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-[#f4c998] [&::-webkit-scrollbar-thumb]:rounded-full
           w-full gap-x-2"
        >
          {content}
        </div>
      </div>

      <div className="my-4">
        <h1 className="md:mb-2 text-md md:text-2xl">
          Cuisines : What's on your mind ??
        </h1>
        <div
          className="w-full p-3 flex overflow-x-scroll [&::-webkit-scrollbar]:h-1.75 [&::-webkit-scrollbar]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f4c998]
                 [&::-webkit-scrollbar-thumb]:rounded-full 
                gap-x-5 items-center"
        >
          {cuisinesList.map((cuisine) => {
            return <CuisineCard key={cuisine.id} cuisineData={cuisine} />;
          })}
        </div>
      </div>
    </div>
  );
}
