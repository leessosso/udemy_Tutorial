import React from "react";
import VideoItem from "./VideoItem";

//es6부터 프롭명으로 바로 데꼬올 수 있음
const VideoList = ({ videos, onVideoSelect1 }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect1}
        video1={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
