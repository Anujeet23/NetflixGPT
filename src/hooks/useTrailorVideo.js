import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailorVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailorVideo = (movieId) => {
    const istrailer = useSelector((store) => store?.movies?.trailorVideo);
    const dispatch = useDispatch();
    // const isTrailer = useSelector((store) => store?.movies?.trailorVideo);

    const getMovieVideo = async () => {
        

        const data = await fetch("https://api.themoviedb.org/3/movie/"+
        movieId +"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length? filterData[0] : json.results[0];
        
        dispatch(addTrailorVideo(trailer));
        
    }

    useEffect(() => {
        if(!istrailer){
        getMovieVideo();
    }
    },[ ]);
};

export default useTrailorVideo;