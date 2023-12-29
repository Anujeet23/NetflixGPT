import React from 'react'
import {  useSelector } from 'react-redux';
import useTrailorVideo from '../hooks/useTrailorVideo';

const VideoBackground = ({movieId}) => {
    const ismute = useSelector((store) => store?.movies?.isMuted);
    const  trailorVideo = useSelector((store) => store?.movies?.trailorVideo);
    useTrailorVideo(movieId);

    return (
        <div className='w-screen'>
            <iframe  
            className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/" + trailorVideo?.key + "?autoplay=1&mute="+ ismute} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
            </iframe>
        </div>
    );
};

export default VideoBackground;