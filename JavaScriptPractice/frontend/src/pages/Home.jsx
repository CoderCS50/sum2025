import MovieCard from "../components/MovieCard";
import React, { useState, useEffect } from "react";
import "../css/Home.css"; //importing the css file
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); //define state
  const [movies, setMovies] = useState([]); //define state for API movies
  const [error, setError] = useState(null); //define state for error
  const [loading, setLoading] = useState(true); //define state for loading

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(); //getting the popular movies
        setMovies(popularMovies); //setting the state
      } catch (err) {
        console.log(err); //logging the error
        setError("failed to load movies..."); //setting the error state
      } finally {
        setLoading(false); //setting the loading state to false
      }
    };
    loadPopularMovies(); //calling the function
  }, []); //empty array means it will run only once when the component mounts
  // --------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------
  // search feature
  const handleSearch = async (e) => {
    e.preventDefault(); //preventing the default behavior. stops updating the page when clicking
    if (!searchQuery.trim()) return;
    if (loading) return; //if loading is true, return

    setLoading(true); //setting the loading state to true

    setSearchQuery("");
    try {
      const searchedResults = await searchMovies(searchQuery); //getting the searched movies
      setMovies(searchedResults); //setting the state
      setError(null); //setting the error state to null
    } catch (err) {
      setError("failed to load movies..."); //setting the error state
      console.log(err); //logging the error
    } finally {
      setLoading(false); //setting the loading state to false
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="seach-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} //updating the state
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* checking if there is an error */}
      {loading ? (
        <div className="loading">Loading... </div>
      ) : (
        <div className="movies-grid">
          {/* mapping through the movies array and checking if the title starts with the search query */}
          {movies.map((movie) => (
            // movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home; // default export method
