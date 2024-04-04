import css from "./MovieSearch.module.css";

const MovieSearch = ({ updateQueryParams }) => {
  function handleSubmit(event) {
    event.preventDefault();
    updateQueryParams(event.currentTarget.elements.query.value);
  }

  return (
    <div className={css.searchContainer}>
      <form onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button className={css.searchButton} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;

// import { useState } from "react";
// import axios from "axios";
// import { API_KEY } from "../config";

// const MovieSearch = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get(
//         "https://api.themoviedb.org/3/search/movie",
//         {
//           params: {
//             api_key: API_KEY,
//             language: "en-US",
//             query: query,
//           },
//         }
//       );
//       onSearch(response.data.results);
//     } catch (error) {
//       console.error("Error searching movies:", error);
//     }
//   };

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={query} onChange={handleChange} />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default MovieSearch;
