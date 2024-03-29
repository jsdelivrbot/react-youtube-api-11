import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // const videos = props.videos;
  // const selectedVideo = props.onVideoSelect;
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={ props.onVideoSelect }
        key={ video.etag }
        video={ video } />
    );
  });

  return (
    <ul className="list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;
