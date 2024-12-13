import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerRestaurantCard from "../RestaurantCard/ShimmerRestaurantCard";
import { SWIGGY_GET_DATA_API } from "../../utils/constants";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerCuisineCard from "../CuisineCard/ShimmerCuisineCard";
import { RestaurantsMockData, CuisinesMockData } from "../../utils/mockData";

export default function Body() {

    // Initialize state with all restaurants data
    const [popularRestaurants, setPopularRestaurants] = useState([]);
    const [allPopularRestaurants, setAllPopularRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [topRatedFilterApplied, setTopRatedFilterApplied] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Handle input change
    const handleInputChange = (event) => {
        
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        if (searchQuery === undefined || searchQuery === '') {
            setPopularRestaurants(allPopularRestaurants);
        } else {
            const searchedFromPopularRestaurants = allPopularRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(query));
            setPopularRestaurants(searchedFromPopularRestaurants);
        }
    };

    const fetchData = async (api) => {
        const fetchedData = await fetch(api);
        const fetchedJson = await fetchedData.json();
        const restaurantGridList = fetchedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const popularRestaurantsList = fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const cuisineCards = fetchedJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;

        setRestaurants(restaurantGridList);
        setPopularRestaurants(popularRestaurantsList);
        setAllPopularRestaurants(popularRestaurantsList);
        setAllRestaurants(restaurantGridList);
        setCuisines(cuisineCards);
        setDataLoaded(true);
    }

    // will get called when my component is rendered
    useEffect(() => {
        fetchData(SWIGGY_GET_DATA_API);
    }, []);

    // Filter the restaurants based on the top-rated filter
    const filterTopRated = () => {
        if (topRatedFilterApplied) {
            setRestaurants(allRestaurants);
            setTopRatedFilterApplied(false);
        } else {
            const filtered = restaurants.filter(restaurant => restaurant.info.avgRating > 4.3);
            setRestaurants(filtered); // Update the state with the filtered data
            setTopRatedFilterApplied(true);
        }
    };

    const searchFromPopularRestaurants = () => {

    };

    if (!dataLoaded) {
        return (
            <div className={styles.body}>
                <div className={styles.cuisines}>
                    <h1>Cuisines: What's on your mind ??</h1>
                    <div className={styles.cuisineContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(10)].map((_, index) => (
                            <ShimmerCuisineCard key={index} />
                        ))}
                    </div>
                </div>

                <div className={styles.restaurants}>
                    <h1>Popular Restaurants In Pune</h1>
                    <div className={styles.popularResContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(5)].map((_, index) => (
                            <ShimmerRestaurantCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.body}>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Search Among Popular Restaurants" value={searchQuery} onChange={handleInputChange} />
            </div>

            <div className={styles.restaurants}>
                <h1>Popular Restaurants In Pune</h1>
                <div className={styles.popularResContainer}>
                    {popularRestaurants.map((restaurant) => {
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
                <div className={styles.cuisineContainer}>
                    {cuisines.map((cuisine) => {
                        return <CuisineCard
                            key={cuisine.id}
                            cuisineData={cuisine}
                        />
                    }
                    )}
                </div>
            </div>

            <hr />

            <div className={styles.filters}>
                <button disabled={true} className={`toggledTopRatedBtn ${topRatedFilterApplied ? 'toggledOn' : 'toggledOff'}`} onClick={filterTopRated}>Top Rated</button>
            </div>

        </div>
    );
}