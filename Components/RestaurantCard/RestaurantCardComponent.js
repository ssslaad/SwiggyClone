import React from "react";
import './restaurantCardComponent.css';

export default function RestaurantCard() {
    return (
        <div className="res-card">
            <img src="https://foodish-api.com/images/biryani/biryani38.jpg" alt="Food photo" className="food-image"></img>
            <div className="res-details">
                <h3 className="res-name">Ancient Hyderabad</h3>
                <p className="res-cuisine">Biryani</p>
                <p className="res-location">Hinjewadi</p>
                <ul class="res-rating-time-cost">
                    <li className="res-rating">⭐4.1</li>
                    <li className="res-time">🚀10-15 mins</li>
                    <li className="res-cost-for-2">💵500 for 2</li>
                </ul>
            </div>
        </div>
    )
}

