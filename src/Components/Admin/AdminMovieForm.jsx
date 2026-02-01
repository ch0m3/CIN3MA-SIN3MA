import { useState } from "react";

function AdminMovieForm({ onMovieAdded }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      title,
      poster,
      price,
    };

    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setPoster("");
        setPrice("");
        onMovieAdded();
      });
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Add New Movie</h2>

      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Poster URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AdminMovieForm;