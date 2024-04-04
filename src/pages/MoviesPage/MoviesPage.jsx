import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MovieSearch from "../../components/MovieSearch/MovieSearch";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (results) => {
    setMovies(results);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <MovieSearch onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
