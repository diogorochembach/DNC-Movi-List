import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "e288b60d79bd92f5018c671dbe6d2b31";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieDetails(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }

  static searchMovies(movie) {
    return axios(withBaseUrl("search/movie") + `&query=${movie}`);
  }
}
