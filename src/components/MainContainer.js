import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { addoverview, addtitle } from '../utils/movieSlice';

const MainContainer = () => {
  const dispatch = useDispatch();

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    
    if(!movies) return;
    
    //Default Wala
    const mainMovie = movies[1];
    const {original_title, overview, id} = mainMovie;
    dispatch(addtitle(original_title));
    dispatch(addoverview(overview));

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title}  overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;