import { useEffect, useState } from "react";

function AdminMovieList({ refresh }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [refresh]);

  function handleDelete(id) {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "DELETE",
    }).then(() =>
      setMovies((prev) => prev.filter((movie) => movie.id !== id))
    );
  }

  return (
    <div className="admin-movie-list">
      <h2>Manage Movies</h2>

      {movies.map((movie) => (
        <div key={movie.id} className="admin-movie-card">
          <p><strong>{movie.title}</strong></p>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminMovieList;


