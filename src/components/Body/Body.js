import React from "react";
import './body.css';
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { RestaurantsData } from "../../utils/mockData";
import CuisineCard from "../CuisineCard/CuisineCard";

export default function Body() {

    return (
        <div className="body">
            <div className="restaurants">
                <h1>Restaurants</h1>
                <div className="res-container">
                    {RestaurantsData.map((restaurant) => {
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
                    <CuisineCard/>
                </div>
            </div>
        </div>
    )
}