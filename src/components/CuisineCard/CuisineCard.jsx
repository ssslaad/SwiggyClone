import React from "react";
import { IMAGE_URL_PREFIX } from "../../utils/constants";

export default function CuisineCard(props) {
  const { cuisineData } = props;
  const { imageId } = cuisineData || {};
  return (
    <img
      src={`${IMAGE_URL_PREFIX}${imageId}`}
      alt=""
      className="p-1 hover:cursor-pointer hover:shadow-[0_3px_6px_#f4c998]
            rounded-xl shadow-md transition-transform duration-200 hover:scale-105 w-20 sm:w-[16%] md:w-[15%] lg:w-[14%] xl:w-[13%]"
    ></img>
  );
}
