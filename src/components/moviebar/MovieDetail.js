import React, { useEffect } from "react";
import useGetEachMovie from "./../hooks/getEachMovie";

function MovieDetail({ movieId }) {
  const { eachMovie } = useGetEachMovie(movieId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eachMovie]);
  return (
    <div className="selectdMovie">
      {eachMovie !== "" && (
        <div>
          <div className="eachMBackImg">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + eachMovie.backdrop_path}
            />
          </div>
          <div className="posterAndInfo">
            <div className="poster">
              <div className="img">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" + eachMovie.poster_path
                  }
                />
              </div>
            </div>
            <div className="info">
              <div className="Title">{eachMovie.original_title}</div>
              <div className="YearAndGenre">
                <div className="Year">{eachMovie.release_date}</div>
                <div className="Genre">
                  {eachMovie.genres.map(
                    (val, index) =>
                      val.name +
                      (index !== eachMovie.genres.length - 1 ? " / " : "")
                  )}
                </div>
              </div>
              <div className="Rating">{eachMovie.vote_average}</div>
              <div className="TimeAndLang">
                <div className="Time">{eachMovie.runtime} </div>
                <div className="Lang">
                  {eachMovie.spoken_languages.map(
                    (val, index) =>
                      val.name +
                      (index !== eachMovie.spoken_languages.length - 1
                        ? " , "
                        : "")
                  )}
                </div>
              </div>
              <div className="ProductionCompany">
                <div className="title">Production Companies</div>
                {eachMovie.production_companies.map(
                  (val, index) =>
                    val.name +
                    (index !== eachMovie.production_companies.length - 1
                      ? " / "
                      : "")
                )}
              </div>
              <div className="ProductionCountry">
                <div className="title">Production Countries</div>
                {eachMovie.production_countries.map(
                  (val, index) =>
                    val.name +
                    (index !== eachMovie.production_countries.length - 1
                      ? " / "
                      : "")
                )}
              </div>
            </div>
          </div>
          <div className="overview">
            <div className="title">Overview</div>
            <div className="content">{eachMovie.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;

// https://api.themoviedb.org/3/movie/337401/images?api_key=85b891d38491973c0dff31bd631036b3
