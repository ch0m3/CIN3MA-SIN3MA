import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from backend
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home page – list of movies */}
        <Route path="/" element={<MovieList movies={movies} />} />

        {/* Movie details page */}
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
