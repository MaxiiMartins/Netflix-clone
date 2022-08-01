import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row/Row";
import "./Home.scss";
import Modal from "../../components/Modal/Modal";
import CardModal from "../../components/CardModal/CardModal";
import { getPeliculas } from "../../redux/store/slices/Peliculas";
import { useDispatch } from "react-redux";


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
  const [lista, setLista] = useState([]);
  const [modalActive,setModalActive] = useState(false)
  const cambiarEstado = ()=> setModalActive(!modalActive)
  const [urlBanner,setUrlBanner] = useState("");
  const [mostrar,setMostrar] = useState({});
  const dispatch = useDispatch()
  const [aleatorio,setAleatorio] = useState(Math.ceil(Math.random()*(5-1)))
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
    if(popular.length){
      let url = "https://image.tmdb.org/t/p/original/"
      url += popular[aleatorio].backdrop_path||popular[aleatorio].poster_path
      setUrlBanner(url)
    }
    dispatch(getPeliculas())
  }, [popular]);

  //`https://image.tmdb.org/t/p/original/${popular[0].poster_path}`
  return (
    <section className="home">
      <Modal estado={modalActive} cambiar={cambiarEstado} >
        <CardModal cambiar={cambiarEstado} informacion={mostrar} />
      </Modal>
      <div
        className="banner"
        style={{
          backgroundImage: popular.length && urlBanner.length
            ? `url(${urlBanner})`
            : "rgb(16, 16, 16)"
        }}
      >
        {popular[aleatorio] && <h1>{popular[aleatorio].title}</h1>}
        {popular[aleatorio] && <p>{popular[aleatorio].overview.length > 570?popular[aleatorio].overview.substring(0,550)+"....":popular[aleatorio].overview}</p>}
      </div>
      {moviesNow.length && movies.length && popular.length&&genres.length ? (
        <>
          <Row title={"Populares"} arr={popular} cargar={setMostrar} cambiar={cambiarEstado}/>
          {lista.length?<Row title={"Mis Favoritos"} arr={lista} cargar={setMostrar} cambiar={cambiarEstado}/>:null}
          <Row title={"Mas Recientes"} arr={moviesNow} cargar={setMostrar} cambiar={cambiarEstado}/>
          <Row title={"Series"} arr={series} cargar={setMostrar} cambiar={cambiarEstado}/>
          <Row title={"Peliculas"} arr={movies} cargar={setMostrar} cambiar={cambiarEstado}/>
          <div className="genreBox">
            {genres.map((item,index)=>{
                return<Link key={index} to={`/genre/${item.id}`} >{item.name}</Link>
            })}
          </div>
        </>
      ) : (
        <h2>Cargando....</h2>
      )}
    </section>
    // falta nada pa terminarlo voy por el hora 1:09:56 del vidio
  );
}

export default Home;
