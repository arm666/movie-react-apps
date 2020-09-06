import React from "react";
import "./moviebar.css";
import MovieCard from "./../MovieCard";
import useGetMovies from "./../hooks/getMovies";
import { NavLink } from "react-router-dom";

function HomeMovieBar({ url, query }) {
  // stores movies
  const { movieList } = useGetMovies(url, query);
  return (
    <div className="moviesList">
      {movieList !== "undefined" && movieList.length > 0 ? (
        movieList.map((val, index) => (
          <NavLink
            to={"/movie-react-app/movie/" + val.id}
            key={"movieCard" + index}
            style={{ textDecoration: "none" }}
          >
            <MovieCard details={val} />
          </NavLink>
        ))
      ) : (
        <div style={{ color: "white" }}>"No Simiar Movies Found." </div>
      )}
    </div>
  );
}

export default HomeMovieBar;
