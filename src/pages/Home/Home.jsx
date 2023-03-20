import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";

const Home = () => {
  const [movies, setMovies] = useState([]);

  async function getMovie() {
    const data = await MovieService.getMovies();
    console.log(data.data.results);
  }

  useEffect(() => {
    getMovies();
  });

  return <section className="Home">{}</section>;
};

export default Home;
