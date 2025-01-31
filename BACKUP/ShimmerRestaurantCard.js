import React from "react";
import './restaurantCard.css';

export default function ShimmerRestaurantCard() {
    return (
        <div className="res-card loading">
            <div className="res-thumbnail loading-thumbnail"></div>
            <div className="res-details">
                <div className="res-name loading"></div>
                <div className="res-location loading"></div>
                <div className="res-rating-time-cost">
                    <div className="res-rating loading"></div>
                    <div className="res-time loading"></div>
                    <div className="res-cost-for-2 loading"></div>
                </div>
                <div className="res-cuisines loading"></div>
            </div>
        </div>
    );
}