import React from 'react'
import {  useSelector } from 'react-redux';
import useTrailorVideo from '../hooks/useTrailorVideo';

const VideoCardBackground = ({movieId}) => {
    const  trailorVideo = useSelector((store) => store?.movies?.trailorVideo);
    useTrailorVideo(movieId);
    
    return (
        <div className=''>
            <iframe  
            className='w-48 '
            src={"https://www.youtube.com/embed/" + trailorVideo?.key + "?autoplay=1&mute=1"} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
            </iframe>
        </div>
    );
};

export default VideoCardBackground;