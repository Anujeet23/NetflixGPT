import React, { useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const store = useSelector((store) => store?.movies);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  if (
    store?.nowPlayingMovies === null ||
    store?.popularMovies === null ||
    store?.topratedMovies === null ||
    store?.upcomingMovies === null
  ) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
