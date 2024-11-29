"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (url, width, height, autoplay) => {
    return (
        /*<ReactPlayer
            url={url}
            width={width}
            height={height}
            playing={autoplay}
            loop={true}
            controls={true} />*/

        <ReactPlayer url={url} width={width} height={height} controls playing={autoplay} />
    );
};

export default VideoPlayer;