import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import {BG_LOGO} from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-30'>
    <img 
    className='w-screen h-screen object-cover'
    src= {BG_LOGO}
    alt='background'
    />
    </div>
    {/* pt-[30%] md:pt-1 */}
    <div className=''> 
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch;