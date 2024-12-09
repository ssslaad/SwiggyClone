import React, { useState } from "react";
import './body.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { RestaurantsData } from "../../utils/mockData";
import CuisineCard from "../CuisineCard/CuisineCard";

export default function Body() {

    // Initialize state with all restaurants data
    const [restaurants, setRestaurants] = useState(RestaurantsData);

    // Filter the restaurants based on the top-rated filter
    const filterTopRated = () => {
        const filtered = RestaurantsData.filter(restaurant => restaurant.info.avgRating > 4.3);
        setRestaurants(filtered); // Update the state with the filtered data
    };

    return (
        <div className="body">
            <div className="filters">
                <button className="top-rated-filter" onClick={filterTopRated}>Top Rated</button>
            </div>
            <div className="restaurants">
                <h1>Restaurants</h1>
                <div className="res-container">
                    {restaurants.map((restaurant) => {
                        return <RestaurantCard
                            key={restaurant.info.id}
                            restaurantData={restaurant}
                        />
                    }
                    )}
                </div>
            </div>

            <div className="cuisines">
                <h1>Cuisines : What's on your mind ??</h1>
                <div className="cuisines-container">
                    <CuisineCard />
                </div>
            </div>
        </div>
    )
}