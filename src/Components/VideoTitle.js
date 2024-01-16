import React from "react";
import { Info, Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-full  bg-gradient-to-r from-black pl-16 pt-[15%]">
      <h1 className="pb-4 text-4xl font-bold text-white">{title}</h1>
      <p className=" w-1/4 pb-5 text-sm text-white">{overview}</p>
      <div className="flex ">
        <button className="mr-3 flex items-center rounded-md bg-white px-8 py-3 text-black">
          <Play color="black" size={12} fill="black" className="mr-1" /> Play
        </button>
        <button className="flex items-center rounded-md bg-gray-500 bg-opacity-75 px-8 py-3 text-white">
          <Info className="mr-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
