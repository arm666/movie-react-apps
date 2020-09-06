import React, { useEffect, useState, useReducer } from "react";
import "./eachMovie.css";
import HomeMovieBar from "./HomeMovieBar";
import MovieDetail from "./MovieDetail";
import NavBar from "./../navbar/NavBar";
function EachMovie(match) {
  return (
    <div className="eachMovie">
      <NavBar />
      <MovieDetail movieId={match.match.params.id} />
      <div className="similarMovies">
        <div className="similarMovieTitle">Similar Movies</div>
        {/* <HomeMovieBar url={"/movie/" + match.match.params.id + "/similar"} /> */}
        <HomeMovieBar url={"/movie/" + match.match.params.id + "/similar"} />
      </div>
    </div>
  );
}

export default EachMovie;

// https://api.themoviedb.org/3/movie/337401?api_key=85b891d38491973c0dff31bd631036b3
// https://api.themoviedb.org/3/movie/now_playing?api_key=85b891d38491973c0dff31bd631036b3
