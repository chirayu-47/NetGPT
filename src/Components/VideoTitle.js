import React from "react";
import { Info, Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-full bg-gradient-to-r from-black pl-6 pt-[15%] md:pl-16">
      <h1 className="w-2/3 pb-4 text-2xl font-bold text-white md:w-full md:text-4xl">
        {title}
      </h1>
      <p className="hidden w-1/4 pb-5 text-sm text-white md:inline-block">
        {overview}
      </p>
      <div className="flex ">
        <button className="mr-3 flex items-center rounded-md bg-white px-4 py-2 text-black md:px-8 md:py-3">
          <Play color="black" size={12} fill="black" className="mr-1" /> Play
        </button>
        <button className="items-center rounded-md bg-gray-500 bg-opacity-75 px-4 py-2 text-white md:inline-flex md:px-8 md:py-3">
          <Info className="mr-1" />
          <p className="hidden md:inline-flex">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
