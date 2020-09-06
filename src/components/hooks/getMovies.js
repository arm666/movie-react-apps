import { useEffect, useState } from "react";
import Axios from "axios";

function useGetMovies(url, query) {
  //stores movies
  const [movieList, setMovieList] = useState([]);
  // calls api when url changes
  useEffect(() => {
    getMovie();
  }, [url, query]);

  // api call using axios
  const getMovie = () => {
    // api path
    const path =
      "http://api.themoviedb.org/3" +
      url +
      "?api_key=85b891d38491973c0dff31bd631036b3&" +
      query;
    // api call using axios
    Axios.get(path)
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { movieList };
}

export default useGetMovies;
