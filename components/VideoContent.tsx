import React from "react";
import ReactPlayer from "react-player";

const VideoContent = () => {
  return (
    <div className="text-dimWhite mt-8 flex-col items-center max-w-screen-xl mx-auto border-b-[1px] border-b-cyan-900 pb-6">
      <div>
        <h1 className="font-titleFont text-[25px] text-white mb-6">
          Our Video Articles:
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center px-4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=DNqJwvnneH8"
          style={{
            maxWidth: "550px",
            border: "1px solid gray",
            padding: "10px",
          }}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=-d5nh0mJ4Hs"
          style={{
            maxWidth: "550px",
            border: "1px solid gray",
            padding: "10px",
          }}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=og_6NM7Cm5M"
          style={{
            maxWidth: "550px",
            border: "1px solid gray",
            padding: "10px",
          }}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=smVGdFw8ta0"
          style={{
            maxWidth: "550px",
            border: "1px solid gray",
            padding: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default VideoContent;
