import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import './App.css'
import { Header } from './Components/Header'
import { NavBar } from './Components/NavBar'
import { Tickets } from './Components/Tickets'

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
      <Header />
      <NavBar />  
       <Header/>
       <NavBar/>      
      <Routes>
    
       {/* Home page – list of movies */}
        <Route path="/" element={<MovieList movies={movies} />} />

        {/* Movie details page */}
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
         <Route path="/tickets" element={<Tickets />} />
        {/* Tickets page */}
        {/* <Tickets/> */}
      </Routes>

      <Tickets/>
    </Router>
  );
    
   
  
}

export default App;
