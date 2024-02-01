import React, { useState } from 'react'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';
import VideoCardBackground from './VideoCardBackground';
import VideoBackground from './VideoBackground';
import { useDispatch } from 'react-redux';
import { addTrailorVideo, addoverview, addtitle } from '../utils/movieSlice';


const MovieCard = ({movieId,posterPath,title,overview}) => {
    const dispatch = useDispatch();

    if(!posterPath) return null;

    const getMovieVideos = async () => {
      const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieId +
          "/videos?language=en-US",
      API_OPTIONS
      );
      const json = await data.json();
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailorVideo(trailer));
      dispatch(addtitle(title));
      dispatch(addoverview(overview));
  };

    const ChangeMainContainer = () => {
      getMovieVideos();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // VideoCardBackground
  return (
        
    <div onClick={ChangeMainContainer} className='w-36 md:w-48 pr-4 hover:w-60 rounded-md cursor-pointer transition-all duration-500'>
        <div>
        <img alt='Movie Card' src = {IMG_CDN_URL + posterPath}/>
        </div>
    </div>
  )
}

export default MovieCard;