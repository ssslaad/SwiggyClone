import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCardComponent";
import './bodyComponent.css';

export default function Body() {
    return (
        <div className="body">
            <div className="restaurants">
                <h1>Restaurants</h1>
                <div className="res-container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
            </div>

            <div className="cuisines">
                <h1>Cuisines : What's on your mind ??</h1>
                <div className="cuisines-container">
                    <RestaurantCard />
                </div>
            </div>
        </div>
    )
}

