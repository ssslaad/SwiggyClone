import React from "react";
import { IMAGE_URL_PREFIX } from "../../utils/constants";
import { NavLink } from "react-router";

export default function RestaurantCard(props) {
  const { restaurantData } = props;
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwo,
    areaName,
    cuisines = [],
    cloudinaryImageId,
  } = restaurantData?.info || {};
  const { slaString } = restaurantData?.info?.sla || {};

  return (
    <div
      className={`flex flex-col p-2 rounded-2xl w-40 sm:w-[30%] md:w-[30%] lg:w-[27%] xl:w-[25%]
         hover:cursor-pointer hover:shadow-[0_3px_6px_#f4c998] shrink-0`}
    >
      <NavLink
        to={`/restaurant/${restaurantData.info.id}`}
        className="block w-full"
        as="div"
      >
        <img
          src={`${IMAGE_URL_PREFIX}${cloudinaryImageId}`}
          alt="Restaurant Image"
          className="w-full aspect-[4/3] object-cover rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
        ></img>
        <div className="mt-2 flex flex-col flex-grow w-full">
          <h3 className="text-[#333] text-sm md:text-lg overflow-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h3>
          <p className="text-responsive overflow-ellipsis whitespace-nowrap overflow-hidden">
            {areaName}
          </p>
          <ul className="">
            <li className="text-responsive md:pt-1 text-gray-400">{`⭐ ${avgRating} (${totalRatingsString})`}</li>
            <li className="text-responsive md:pt-1 text-gray-400">{`🚀 ${slaString}`}</li>
            <li className="text-responsive md:pt-1 text-gray-400">{`💵 ${costForTwo}`}</li>
          </ul>
          <p className="text-responsive md:pt-1 text-gray-400 truncate w-full">
            {cuisines.join(", ")}
          </p>
        </div>
      </NavLink>
    </div>
  );
}
