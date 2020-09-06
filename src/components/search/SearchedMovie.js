import React from "react";
import NavBar from "./../navbar/NavBar";
import HomeMovieBar from "./../moviebar/HomeMovieBar";

function SearchedMovie(match) {
  return (
    <div style={{ background: "#222" }}>
      <NavBar />
      <div>
        <div></div>
      </div>
      <HomeMovieBar
        url="/search/movie"
        query={"query=" + match.match.params.query}
      />
    </div>
  );
}

export default SearchedMovie;
