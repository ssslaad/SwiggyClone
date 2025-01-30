import React, { useEffect, useState } from "react";
import styles from './body.module.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerRestaurantCard from "../RestaurantCard/ShimmerRestaurantCard";
import { SWIGGY_GET_DATA_API } from "../../utils/constants";
import CuisineCard from "../CuisineCard/CuisineCard";
import ShimmerCuisineCard from "../CuisineCard/ShimmerCuisineCard";

export default function Body() {

    // Initialize state with all restaurants data
    const [popularRestaurants, setPopularRestaurants] = useState([]);
    // const [allPopularRestaurants, setAllPopularRestaurants] = useState([]);
    // const [restaurants, setRestaurants] = useState([]);
    // const [allRestaurants, setAllRestaurants] = useState([]);
    // const [cuisines, setCuisines] = useState([]);
    // const [dataLoaded, setDataLoaded] = useState(false);
    // const [topRatedFilterApplied, setTopRatedFilterApplied] = useState(false);
    // const [lowPricedFilterApplied, setlowPricedFilterApplied] = useState(false);
    // const [searchQuery, setSearchQuery] = useState('');

    //const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [filters, setFilters] = useState({
        topRated: false,
        lowPriced: false,
        searchQuery: "",
    });


    const fetchData = async (api) => {
        const fetchedData = await fetch(api);
        const fetchedJson = await fetchedData.json();
        //const restaurantGridList = fetchedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const popularRestaurantsList = fetchedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const cuisineCards = fetchedJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;

        //setRestaurants(restaurantGridList);
        setFilteredRestaurants(popularRestaurantsList);
        setPopularRestaurants(popularRestaurantsList);
        setCuisines(cuisineCards);
        setDataLoaded(true);
    }

    // will get called when my component is rendered
    useEffect(() => {
        fetchData(SWIGGY_GET_DATA_API);
    }, []);

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
        let filteredRestaurants = [...popularRestaurants];
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
                     onClick={toggleLowPricedFilter}>Low Priced (under 500 Rs)</button>
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
                    {cuisines.map((cuisine) => {
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