import { useEffect, useState } from "react";
const genre_ids = [
  28,
  12,
  16,
  35,
  80,
  99,
  18,
  10751,
  14,
  36,
  27,
  10402,
  9648,
  10749,
  878,
  10770,
  53,
  10752,
  37,
];
const genre_names = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];
function useGetGenre(genresList) {
  const [genres, setGenres] = useState("");
  useEffect(() => {
    var genre = "";
    genresList.map((val) => {
      genre_ids.includes(val) &&
        (genre += ", " + genre_names[genre_ids.indexOf(val)]);
    });
    setGenres(genre);
  }, [genres]);
  return genres.substr(1);
}

export default useGetGenre;
