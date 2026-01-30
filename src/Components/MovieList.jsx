import { Link } from "react-router-dom";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h1>Now Showing!!</h1>

      {movies.length === 0 && <p>No movies available</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />

            <h3>{movie.title}</h3>
            <p>Price: KES {movie.price}</p>

            <Link to={`/movies/${movie.id}`}>
              <button className="details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
