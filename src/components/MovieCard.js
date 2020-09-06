import React from "react";
import useGetGenre from "./hooks/getGenre";

function MovieCard({ details }) {
  return (
    <div className="movieCard">
      <div className="vote_average">{details.vote_average}</div>
      <div className="posterImg">
        <img src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}  alt="poster" />
      </div>
      <div className="content">
        <div className="title">{details.original_title}</div>
        <div className="genres">{useGetGenre(details.genre_ids)}</div>
      </div>
    </div>
  );
}

export default MovieCard;
