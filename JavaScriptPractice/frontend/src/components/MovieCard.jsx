import React, { useState } from "react"; // importing react and useState hook
import "../css/MovieCard.css"; // importing css file

function MovieCard({ movie }) {
  const [showOverview, setShowOverview] = useState(false);
  // accepting movie as a prop
  // Destructuring the movie object to extract properties

  function onFavoriteClick() {
    alert("Favorited: " + movie.title);
  }
  // show movie overview
  function toggleOverview() {
    setShowOverview((prev) => !prev);
  }

  //movie is an object
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        {showOverview && (
          <p>
            {movie.overview} <br /> <br /> <strong>Average Rating:{" "}
            {movie.vote_average?.toFixed(1)}</strong>
          </p>
        )}
        <button onClick={toggleOverview} className="overview-btn">
          {showOverview ? "Hide Overview" : "Show Overview"}
        </button>
      </div>
    </div>
  );
}
export default MovieCard; // default export method
