import {useState, useEffect} from "react";

export function useRestaurantFilters(initialRestaurants){

    const [filteredRestaurants, setFilteredRestaurants] = useState(initialRestaurants);
    const [filters, setFilters] = useState({
        topRated: false,
        lowPriced: false,
        searchQuery: "",
    });
    
    useEffect(()=>{
        applyFilters();
    },[filters, initialRestaurants]);

    // setting topRateFilter to true or false based on previous value
    const toggleTopRatedFilter = () => {
        setFilters(prevFilters => ({
            ...prevFilters,  // Keep existing filter values
            topRated: !prevFilters.topRated  // Update only searchQuery
        }));
    };

    // setting lowPricedFilter to true or false based on previous value
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
        let filteredRestaurants = [...initialRestaurants];
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
            filteredRestaurants = filteredRestaurants.filter( (restaurant) => {
                return restaurant.info.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                restaurant.info.cuisines.findIndex(cuisine => cuisine.toLowerCase().includes(filters.searchQuery.toLowerCase())) !== -1
            }
            );
        }

        setFilteredRestaurants(filteredRestaurants);
    }

    return {
        filters,
        filteredRestaurants,
        toggleTopRatedFilter,
        toggleLowPricedFilter,
        handleInputChange
    }

}