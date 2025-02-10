import React from "react";
import './cuisineCard.css';

export default function ShimmerCuisineCard() {
    return (
        <div className="cuisineCard loading">
            <div className="cuisineThumbnail loadingThumbnail"/>
        </div>
    )
}