import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMute } from '../utils/movieSlice';

const VideoTitle = ({title, overview}) => {
    const dispatch = useDispatch();
    const isMuted = useSelector((store) => store?.movies?.isMuted);

    const handleMute = () => {
        dispatch(toggleMute((isMuted === 1 ? 0 : 1)));
    };

    return (
    <div className='w-screen aspect-video  pt-[14%] px-2 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <div className="flex items-center justify-between">
        <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
        <button className='rounded-full w-10 h-10 p-1 bg-slate-100 text-black hover:opacity-80' onClick={handleMute}>
            <FontAwesomeIcon className='mr-1' icon={faVolumeOff} />
        </button>
        </div>
        <p className='hidden md:inline-block py-3 text-lg w-2/4'>{overview}</p>
        <div className='my-3 md:m-0'>
            <button className='bg-white text-black hover:opacity-80 p-[0.5%] md:p-[0.9%] mt-1 px-2 md:px-6 text-xl rounded-lg'>▶️Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 hover:opacity-80 text-white p-[0.9%] mt-1 px-6 text-xl rounded-lg'>ℹ️More Info</button>
        </div>
        
    </div>
  );
};

export default VideoTitle;