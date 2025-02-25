import React from "react";
import { useState } from "react";

export default function AboutUs(){

    const[isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col items-center gap-y-5 p-5 md:flex-row md:gap-x-5 md:justify-center md:items-start">
            
            <div className="flex flex-col items-center justify-center gap-y-2 md:w-3/4" >
            <h3 className="text-[#333] text-sm md:text-lg overflow-ellipsis whitespace-nowrap overflow-hidden">About this project</h3>

                <p className="text-center md:max-w-3xl md:leading-[2]">
                    This is a clone of Swiggy application. Swiggy is a new-age consumer-first
                    organization offering an easy-to-use convenience platform, 
                    accessible through a unified app.
                </p>
            
                {/* show these paragraphs only if expanded */}
                <p className={`text-center md:max-w-3xl md:leading-[2] ${isExpanded ? "block" : "hidden"} md:block`}>  
                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Vestibulum sit amet erat ut lorem commodo porta. 
                </p>
                
                <p className={`text-center md:max-w-3xl md:leading-[2] ${isExpanded ? "block" : "hidden"} md:block`}>
                Cras scelerisque, ante ac gravida varius, eros lacus porta erat, et euismod orci nisi sed velit. 
                Cras tristique augue dolor, ut blandit dui mollis at.
                </p>

                <button onClick={ () => setIsExpanded(!isExpanded) } 
                    className="text-blue-600 hover:underline font-medium md:hidden">
                    {isExpanded ? "Read less" : " Read more..."}
                </button>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-y-2 md:w-1/4 md:gap-y-4 md:px-4">
            <h3 className="text-[#333] text-sm md:text-lg overflow-ellipsis whitespace-nowrap overflow-hidden">Contact Me</h3>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-extrabold">Name</h2>
                    <h3>Sudeep Laad</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-extrabold">Mail Id</h2>
                    <h3>sudeeplaad01@gmail.com</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-extrabold">Contact</h2>
                    <h3>+91-XXXXXXXXX</h3>
                </div>
            </div>
        </div>
    );
}