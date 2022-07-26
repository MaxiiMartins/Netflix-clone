import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import "./Home.scss";

const URL_MOVIE = "https://api.themoviedb.org/3/movie/";
const URL_ALL_GENRE = "https://api.themoviedb.org/3/genre/";
const URL_SERIE = "https://api.themoviedb.org/3/tv/";
const APYKEY = "?api_key=bc6ac22affa503f353b1d14be2f07162";

function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesNow, setMoviesNow] = useState([]);
  const [popular, setPopular] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchGeneral = async () => {
      const allGenre = (
        await axios.get(`${URL_ALL_GENRE}movie/list${APYKEY}&language=es-AR`)
      ).data;
      const upcomingMov = (
        await axios.get(
          `${URL_MOVIE}upcoming${APYKEY}&language=es-AR&region=AR&page=1`
        )
      ).data;
      const upcomingMov2 = (
        await axios.get(`${URL_MOVIE}upcoming${APYKEY}&language=es-AR&page=2`)
      ).data;
      const popularMov = (
        await axios.get(
          `${URL_MOVIE}popular${APYKEY}&language=es-AR&region=AR&page=2`
        )
      ).data;
      const popularMov2 = (
        await axios.get(
          `${URL_MOVIE}popular${APYKEY}&language=es-AR&region=AR&page=1`
        )
      ).data;
      const topRateMov = (
        await axios.get(
          `${URL_MOVIE}top_rated${APYKEY}&language=es-AR&region=AR&page=1`
        )
      ).data;
      const topRateMov2 = (
        await axios.get(
          `${URL_MOVIE}top_rated${APYKEY}&language=es-AR&region=AR&page=2`
        )
      ).data;
      const seriesTotal = (
        await axios.get(
          `${URL_SERIE}popular${APYKEY}&language=es-AR&region=AR&page=1`
        )
      ).data;
      const seriesTotal2 = (
        await axios.get(
          `${URL_SERIE}airing_today${APYKEY}&language=es-AR&region=AR&page=2`
        )
      ).data;
      console.log(allGenre);
      setGenres([...allGenre.genres]);
      setMovies([
        ...movies,
        ...upcomingMov.results,
        ...topRateMov.results,
        ...topRateMov2.results,
        ...popularMov.results,
        ...popularMov2.results
      ]);
      setMoviesNow([
        ...moviesNow,
        ...upcomingMov.results,
        ...upcomingMov2.results
      ]);
      setPopular([
        ...popular,
        ...popularMov.results,
        ...popularMov2.results,
        ...topRateMov.results,
        ...topRateMov2.results
      ]);
      setSeries([...series, ...seriesTotal.results, ...seriesTotal2.results]);
    };
    if (!movies.length) {
      fetchGeneral();
    }
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popular[0]
            ? `url(${`https://image.tmdb.org/t/p/original/${popular[0].poster_path}`})`
            : "rgb(16, 16, 16)"
        }}
      >
        {popular[0] && <h1>{popular[0].original_title}</h1>}
        {popular[0] && <p>{popular[0].overview}</p>}
      </div>
      {moviesNow.length && movies.length && popular.length ? (
        <>
          <Row title={"Popular en Netflix"} arr={popular} />
          <Row title={"Mis Favoritos"} />
          <Row title={"Nuevas en Netflix"} arr={moviesNow} />
          <Row title={"Peliculas"} arr={movies} />
          <Row title={"Series"} arr={series} />
        </>
      ) : (
        <h2>Cargando....</h2>
      )}
    </section>
  );
}

export default Home;
