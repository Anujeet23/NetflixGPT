import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import VideoCardBackground from './VideoCardBackground';


const MovieCard = ({movieId,posterPath}) => {
    const [isHovered, setIsHovered] = useState(false);
    if(!posterPath) return null;
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

  return (
        
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-36 md:w-48 pr-4 hover:w-60 rounded-md cursor-pointer'>
        {/* { {isHovered} ? (
        <div>
            <VideoCardBackground movieId={movieId}/>
            
        </div>) :
        (<div>
        <img alt='Movie Card' src = {IMG_CDN_URL + posterPath}/>
        </div>)
        } */}
        <div>
        <img alt='Movie Card' src = {IMG_CDN_URL + posterPath}/>
        </div>
    </div>
  )
}

export default MovieCard;