import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import { useLoaderData } from "react-router";
import { SearchAndFilters } from "../SearchAndFilters/SearchAndFilters";
import { useRestaurantFilters } from "../../custom-hooks/RestaurantFilterHook";

export default function Body() {

    const {popularRestaurantsList,cuisinesList} = useLoaderData();
    const {filters, filteredRestaurants,
         toggleTopRatedFilter, toggleLowPricedFilter,handleInputChange} = useRestaurantFilters(popularRestaurantsList);

    // content to be shown for popular restaurants div
    let content;
    if(filteredRestaurants.length === 0){
        content = <h4>No Popular Restaurant found for your search</h4>
    }else{
        content = filteredRestaurants.map((restaurant) => {
            return <RestaurantCard
                key={restaurant.info.id}
                restaurantData={restaurant}
            />
        });
    }

    return (
        <div className={styles.body}>

            <SearchAndFilters 
            filters={filters}
            toggleTopRatedFilter={toggleTopRatedFilter}
            toggleLowPricedFilter={toggleLowPricedFilter}
            handleInputChange={handleInputChange}
            />
            
            <div className={styles.restaurants}>
                <h1>Popular Restaurants In Pune</h1>
                <div className={styles.popularResContainer}>
                    {content}
                </div>
            </div>

            <div className={styles.cuisines}>
                <h1>Cuisines : What's on your mind ??</h1>
                <div className={styles.cuisineContainer}>
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
