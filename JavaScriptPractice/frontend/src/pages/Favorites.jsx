import "../css/Favorites.css"; // import css file
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard"; // import movie card component

function Favorites() {
  const { favorites } = useMovieContext(); // destructuring the favorites from the movie context
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>no favorite movie yet</h2>
      <p>start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorites; // default export method
