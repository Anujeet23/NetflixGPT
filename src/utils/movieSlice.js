import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailorVideo: null,
        title: null,
        overview: null,
        isMuted: 1,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailorVideo: (state, action) => {
            state.trailorVideo = action.payload;
        },
        toggleMute: (state, action) => {
            state.isMuted = action.payload;
        },
        addtitle: (state, action) => {
            state.title = action.payload;
        },
        addoverview: (state, action) => {
            state.overview = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies,addUpcomingMovies, addTrailorVideo,addtitle, addoverview, toggleMute } = movieSlice.actions;
export default  movieSlice.reducer;