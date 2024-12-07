import React from "react";
import './restaurantCard.css';

export default function RestaurantCard(props) {
    const {restaurantData} = props;
    const {name, avgRating, totalRatingsString,costForTwo, areaName, cuisines = [], cloudinaryImageId} = restaurantData?.info || {};
    const {slaString} = restaurantData?.info?.sla || {};
    
    return (
        <div className="res-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Food photo" className="res-thumbnail"></img>
            <div className="res-details">
                <h3 className="res-name">{name}</h3>
                <p className="res-location">{areaName}</p>
                <ul className="res-rating-time-cost">
                    <li className="res-rating">⭐ {`${avgRating} (${totalRatingsString})`}</li>
                    <li className="res-time">🚀 {slaString}</li>
                    <li className="res-cost-for-2">💵 {costForTwo}</li>
                </ul>
                <p className="res-cuisines">{cuisines.join(", ")}</p>
            </div>
        </div>
    )
}

