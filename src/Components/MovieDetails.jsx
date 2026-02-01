import { useParams } from "react-router-dom";

 import "./MovieDetails.css";

 function MovieDetails({ movies }) { 

    const { id } = useParams();
    const movie = movies.find(m => m.id === id);

     if (!movie) return <p>Loading...</p>;
     
     return ( <div className="details"> <h2>{movie.title}</h2>

      <img src={movie.poster} alt={movie.title} />

      <p>Price: KES {movie.price}</p> 

      </div>
      ); } 



      export default MovieDetails;