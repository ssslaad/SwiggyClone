import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import { useLoaderData } from "react-router";

export default function Body() {

    const {popularRestaurantsList,cuisinesList} = useLoaderData();
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [filters, setFilters] = useState({
        topRated: false,
        lowPriced: false,
        searchQuery: "",
    });

    useEffect(()=>{
        applyFilters();
    },[filters]);

    // Filter the restaurants based on the top-rated filter
    const toggleTopRatedFilter = () => {
        setFilters(prevFilters => ({
            ...prevFilters,  // Keep existing filter values
            topRated: !prevFilters.topRated  // Update only searchQuery
        }));
    };

    // Filter the restaurants based on the top-rated filter
    const toggleLowPricedFilter = () => {
        setFilters(prevFilters => ({
            ...prevFilters,  // Keep existing filter values
            lowPriced: !prevFilters.lowPriced  // Update only searchQuery
        }));
    };
    
    // Handle input change
    const handleInputChange = (event) => {
        const query = event.target.value.toLowerCase();
        setFilters(prevFilters => ({
            ...prevFilters,  // Keep existing filter values
            searchQuery: query  // Update only searchQuery
        }));
    };

    const applyFilters = () => {
        let filteredRestaurants = [...popularRestaurantsList];
        if(filters.topRated){
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.info.avgRating > 4.3);
        }
        if(filters.lowPriced){
            filteredRestaurants = filteredRestaurants.filter(restaurant => {
                const strCostForTwo = restaurant.info.costForTwo;
                return (Number(strCostForTwo.match(/\d+/)[0]) <= 400);
            });
        }
        // Also apply search filter
        if (filters.searchQuery) {
            filteredRestaurants = filteredRestaurants.filter(restaurant =>
                restaurant.info.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
            );
        }

        setFilteredRestaurants(filteredRestaurants);
    }

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

            <div className={styles.searchAndFilter}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search Among Popular Restaurants" value={filters.searchQuery} onChange={handleInputChange} />
                </div>

                <div className={styles.verticalSeparator}></div>

                <div className={styles.filters}>
                    <button className={filters.topRated ? styles.toggledOn : ``}
                     onClick={toggleTopRatedFilter}>Top Rated</button>
                    <button className={filters.lowPriced ? styles.toggledOn : ``}
                     onClick={toggleLowPricedFilter}>Low Priced (under 400 Rs)</button>
                </div>
            </div>
            
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
