import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoContent = () => {
  const [videoMaterials, setVideoMaterials] = useState<any[]>([]);
  useEffect(() => {
    const video = [
      {
        id: 1001,
        videoLink: "https://www.youtube.com/watch?v=DNqJwvnneH8",
      },
      {
        id: 1002,
        videoLink: "https://www.youtube.com/watch?v=DNqJwvnneH8",
      },
      {
        id: 1003,
        videoLink: "https://www.youtube.com/watch?v=DNqJwvnneH8",
      },
      {
        id: 1004,
        videoLink: "https://www.youtube.com/watch?v=DNqJwvnneH8",
      },
    ];
    setVideoMaterials(video);
  }, []);

  return (
    <div className="text-dimWhite mt-8 flex-col items-center max-w-screen-xl mx-auto border-b-[1px] border-b-cyan-900 pb-6">
      <div>
        <h1 className="font-titleFont text-[25px] text-center text-white mb-6">
          Our Video Materials:
        </h1>
      </div>
      <div className="px-6 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6">
        {videoMaterials.map((videos) => (
          <div
            key={videos.id}
            className="brightness-75 hover:brightness-105 duration-150 flex items-center justify-center flex-wrap w-full h-auto"
          >
            <ReactPlayer
              url={videos.videoLink}
              style={{
                border: "1px solid gray",
                padding: "10px",
              }}
              controls={true}
            />
          </div>
        ))}
        {/* <div className="brightness-75 hover:brightness-105 duration-150 flex items-center justify-center flex-wrap w-full h-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=DNqJwvnneH8"
            style={{
              border: "1px solid gray",
              padding: "10px",
            }}
            controls={true}
          />
        </div>
        <div className="brightness-75 hover:brightness-105 duration-150 flex items-center justify-center flex-wrap w-full h-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-d5nh0mJ4Hs"
            style={{
              border: "1px solid gray",
              padding: "10px",
            }}
            controls={true}
          />
        </div>
        <div className="brightness-75 hover:brightness-105 duration-150 flex items-center justify-center flex-wrap w-full h-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=og_6NM7Cm5M"
            style={{
              border: "1px solid gray",
              padding: "10px",
            }}
            controls={true}
          />
        </div>
        <div className="brightness-75 hover:brightness-105 duration-150 flex items-center justify-center flex-wrap w-full h-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=smVGdFw8ta0"
            style={{
              border: "1px solid gray",
              padding: "10px",
            }}
            controls={true}
          />
        </div> */}
      </div>
    </div>
  );
};

export default VideoContent;
