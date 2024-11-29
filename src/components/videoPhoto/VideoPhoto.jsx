"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import videoPhoto from "@/public/assets/images/video/img-video.png";
import videoPhotoResp from "@/public/assets/images/video/img-video_responsive.png";
import Image from "next/image";
import { BsPlayBtnFill } from "react-icons/bs";


const VideoPhoto = () => {
    const [play, setPlay] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="videoPhotoContainer">
                {play ? (
                    <>
                        <ReactPlayer url="https://www.youtube.com/embed/6pk8e99hTqA?si=yQk9ELfne5CdvpAG?autoplay=1&cc_load_policy=1"
                            height='600px'
                            width='100%'
                            controls
                            playing={play}
                            loop={true} />
                        {/*  <VideoPlayer
                        url="https://www.youtube.com/embed/6pk8e99hTqA?si=yQk9ELfne5CdvpAG?autoplay=1&cc_load_policy=1"
                        autoplay={play}
                    />*/}
                    </>
                ) : (
                    <>
                        <Image src={width < 840 ? videoPhotoResp : videoPhoto} alt="Quienes somos" className="videoImg" />
                        <BsPlayBtnFill
                            className="playButton"
                            onClick={() => {
                                setPlay(true);
                            }}
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default VideoPhoto;