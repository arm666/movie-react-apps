import { useState, useEffect } from "react";
import Axios from "axios";

function useGetEachMovie(id) {
  const [eachMovie, setEachMovie] = useState("");
  useEffect(() => {
    getMovie();
  }, [id]);
  const getMovie = () => {
    const path =
      "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=85b891d38491973c0dff31bd631036b3";

    Axios.get(path)
      .then((res) => {
        setEachMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { eachMovie };
}

export default useGetEachMovie;
