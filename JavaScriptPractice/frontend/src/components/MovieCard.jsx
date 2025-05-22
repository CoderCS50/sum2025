import React, { useState } from "react"; // importing react and useState hook
import "../css/MovieCard.css"; // importing css file
import { useMovieContext } from "../contexts/MovieContext"; // importing the movie context

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id); // checking if the movie is a favorite

  const [showOverview, setShowOverview] = useState(false);
  // accepting movie as a prop
  // Destructuring the movie object to extract properties

  function onFavoriteClick(e) {
    e.preventDefault(); // prevent default behavior
    if (favorite) {
      removeFromFavorites(movie.id); // remove from favorites
    } else {
      addToFavorites(movie); // add to favorites
    }
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
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        {showOverview && (
          <p>
            {movie.overview} <br /> <br />{" "}
            <strong>Average Rating: {movie.vote_average?.toFixed(1)}</strong>
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
