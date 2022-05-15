import './css/VideoItem.css'
import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="ui image" />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

export default VideoItem;