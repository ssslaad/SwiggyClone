import React from "react";
import './cuisineCard.css';
import { IMAGE_URL_PREFIX } from "../../utils/constants";

export default function CuisineCard(props) {
    const { cuisineData } = props;
    const { imageId } = cuisineData || {};
    return (
        <div className="cuisineCard">
           <img src={`${IMAGE_URL_PREFIX}${imageId}`} alt="" className="cuisineThumbnail"></img>
        </div>
    )
}