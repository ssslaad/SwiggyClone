import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerRestaurantCard from "../RestaurantCard/ShimmerRestaurantCard";
import { SWIGGY_GET_DATA_API } from "../../utils/constants";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerCuisineCard from "../CuisineCard/ShimmerCuisineCard";
import { useRestaurantFilters } from '../../custom-hooks/RestaurantFilterHook';
import { SearchAndFilters } from "../SearchAndFilters/SearchAndFilters";

export default function Body() {

    const [popularRestaurantsList, setPopularRestaurantsList] = useState([]);
    const [cuisinesList, setCuisinesList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const { filters, filteredRestaurants,
        toggleTopRatedFilter, toggleLowPricedFilter, handleInputChange } = useRestaurantFilters(popularRestaurantsList);


    const fetchData = async (api) => {
        try {
            const fetchedData = await fetch(api);
            const fetchedJson = await fetchedData.json();
            const popularRestaurantsList = fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const cuisineCards = fetchedJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;
            setPopularRestaurantsList(popularRestaurantsList);
            setCuisinesList(cuisineCards);
        } catch (error) {
            console.error(error);
        } finally {
            setDataLoaded(true);
        }
    }

    // will get called when my component is rendered
    useEffect(() => {
        fetchData(SWIGGY_GET_DATA_API);
    }, []);

    // show shimmer UI when data is not loaded 
    if (!dataLoaded) {
        return (
            <div className={styles.body}>

                <div className={styles.restaurants}>
                    <h1>Popular Restaurants In Pune</h1>
                    <div className={styles.popularResContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(5)].map((_, index) => (
                            <ShimmerRestaurantCard key={index} />
                        ))}
                    </div>
                </div>

                <div className={styles.cuisines}>
                    <h1>Cuisines: What's on your mind ??</h1>
                    <div className={styles.cuisineContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(10)].map((_, index) => (
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