import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTopratedMovies = () => {
    const topratedMovies = useSelector((store) => store.movies.topRatedMovies);
    const dispatch = useDispatch();
    const getTopratedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);

    const json = await data.json();
    
    dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        if(!topratedMovies){
        getTopratedMovies();
        }
    }, []);
}

export default useTopratedMovies;