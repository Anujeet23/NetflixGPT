import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const language = useSelector((store) => store.config.lang);


    const searchMovieTMDB = async (movie) =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+ 
            movie +
            "&include_adult=false&language=en-US&page=1", API_OPTIONS);

            const json = await data.json();
            // console.log(json.results);
            return json.results;
    }

    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });

            const gptMovies = gptResults.choices?.[0]?.message?.content?.split(',');
            //For each movie, Search TMDB API

            const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
            // console.log(tmdbResults);
            dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    };

  return (
    <div className='pt-[45%] md:pt-[8%]  flex justify-center'>
        <form className='w-full md:w-1/2 bg-black bg-opacity-70 grid grid-cols-12 rounded-2xl' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9 rounded-lg" placeholder={lang[language].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className='py-2 px-4 m-4 col-span-3 bg-red-700 hover:bg-red-600 font-semibold text-white rounded-lg'>{lang[language].search}</button>
        </form>
    </div>
  );
};

export default GptSearchBar;