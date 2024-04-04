import { Routes, Route } from "react-router-dom";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MoviesPage from "../MoviesPage/MoviesPage";

const HomePage = () => {
  return (
    <main>
      <h1>CineHunt</h1>

      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/moviesSearch" element={<MovieSearch />} />
      </Routes>
    </main>
  );
};

export default HomePage;
