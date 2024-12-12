import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerRestaurantCard from "../RestaurantCard/ShimmerRestaurantCard";
import { SWIGGY_GET_DATA_API } from "../../utils/constants";

export default function Body() {

    // Initialize state with all restaurants data
    const [restaurants, setRestaurants] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const fetchData = async (api) => {
        const fetchedData = await fetch(api);
        const fetchedJson = await fetchedData.json();
        const restaurantCards = fetchedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(restaurantCards);
        setDataLoaded(true);
    }

    // will get called when my component is rendered
    useEffect(() => {
        fetchData(SWIGGY_GET_DATA_API);
    }, []);

    // Filter the restaurants based on the top-rated filter
    const filterTopRated = () => {
        const filtered = restaurants.filter(restaurant => restaurant.info.avgRating > 4.3);
        setRestaurants(filtered); // Update the state with the filtered data
    };

    if (!dataLoaded) {
        return (
            <div className={styles.body}>
                
                <div className={styles.filters}>
                    <button onClick={filterTopRated}>Top Rated</button>
                </div>

                <div className={styles.restaurants}>
                    <h1>Restaurants</h1>
                    <div className={styles.resContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(4)].map((_, index) => (
                            <ShimmerRestaurantCard key={index} />
                        ))}
                    </div>
                </div>

                <div className={styles.cuisines}>
                    <h1>Cuisines: What's on your mind ??</h1>
                    <div className={styles.cuisinesContainer}>
                        <CuisineCard />
                        <ShimmerRestaurantCard />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.body}>
            <div className={styles.filters}>
                <button onClick={filterTopRated}>Top Rated</button>
            </div>
            <div className={styles.restaurants}>
                <h1>Restaurants</h1>
                <div className={styles.resContainer}>
                    {restaurants.map((restaurant) => {
                        return <RestaurantCard
                            key={restaurant.info.id}
                            restaurantData={restaurant}
                        />
                    }
                    )}
                </div>
            </div>

            <div className={styles.cuisines}>
                <h1>Cuisines : What's on your mind ??</h1>
                <div className={styles.cuisinesContainer}>
                    <CuisineCard />
                </div>
            </div>
        </div>
    );
}