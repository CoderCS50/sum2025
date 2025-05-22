const API_KEY = "8cdbc897098562c45a40a18426c67b81";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}` //getting the popular movies
    );
    const data = await response.json() //waiting for the response to be converted to json
    return data.results
}
export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}` //getting the popular movies
    );
    const data = await response.json() //waiting for the response to be converted to json
    return data.results
}