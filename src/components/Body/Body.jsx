import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import { useLoaderData } from "react-router";
import { SearchAndFilters } from "../SearchAndFilters/SearchAndFilters";
import { useRestaurantFilters } from "../../custom-hooks/RestaurantFilterHook";

export default function Body() {

    const { popularRestaurantsList, cuisinesList } = useLoaderData();
    const { filters, filteredRestaurants,
        toggleTopRatedFilter, toggleLowPricedFilter, handleInputChange } = useRestaurantFilters(popularRestaurantsList);

    // content to be shown for popular restaurants div
    let content;
    if (filteredRestaurants.length === 0) {
        content = <h4>No Popular Restaurant found for your search</h4>
    } else {
        content = filteredRestaurants.map((restaurant) => {
            return <RestaurantCard
                key={restaurant.info.id}
                restaurantData={restaurant}
            />
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
                <h1 className="md:mb-2 text-md md:text-2xl">Popular Restaurants In Pune</h1>
                <div className="p-2 flex overflow-x-auto [&::-webkit-scrollbar]:h-1.75 [&::-webkit-scrollbar-thumb]:bg-[#f4c998]
                 [&::-webkit-scrollbar-thumb]:rounded-full w-full gap-x-4">
                    {content}
                </div>
            </div>

            <div className="my-4">
                <h1 className="md:mb-2 text-md md:text-2xl">Cuisines : What's on your mind ??</h1>
                <div className="w-full p-2 flex overflow-x-auto [&::-webkit-scrollbar]:h-1.75 [&::-webkit-scrollbar-thumb]:bg-[#f4c998]
                 [&::-webkit-scrollbar-thumb]:rounded-full 
                gap-x-5 items-center">
                    {cuisinesList.map((cuisine) => {
                        return <CuisineCard
                            key={cuisine.id}
                            cuisineData={cuisine}
                        />
                    }
                    )}
                </div>
            </div>
        </div>
    );
}
