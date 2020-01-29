import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video1, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video1)} className="video-item item">
      <img
        alt={video1.snippet.title}
        className="ui image"
        src={video1.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video1.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
