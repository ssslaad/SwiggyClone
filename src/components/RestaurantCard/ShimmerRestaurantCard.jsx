import React from "react";

export default function ShimmerRestaurantCard() {
  return (
    <div
      className={`p-2 rounded-2xl w-40 sm:w-[30%] md:w-[30%] lg:w-[27%] xl:w-[25%]
         bg-[#f3f3f3] shrink-0 border-[#ddd]-2`}
    >
      <div className="p-2 w-full aspect-[4/3] object-cover rounded-xl animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"></div>
      <div className="w-full h-20">
        <div className="p-2 mt-1 bg-[#e0e0e0] border-[#ddd]-2 w-15 md:w-25 shrink-0 h-2"></div>
        <div className="p-2 mt-1 bg-[#e0e0e0] border-[#ddd]-2 w-10 md:w-30 shrink-0 h-2"></div>
        <div className="w-full h-10">
          <div className="p-2 mt-1 bg-[#e0e0e0] border-[#ddd]-2 h-2 w-5 md:w-10"></div>
          <div className="p-2 mt-1 bg-[#e0e0e0] border-[#ddd]-2 h-2 w-10 md:w-15"></div>
        </div>
      </div>
    </div>
  );
}
