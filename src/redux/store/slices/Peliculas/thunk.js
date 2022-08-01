
import { setPeliculas } from "./peliculaSlice"

import tmdbApi, { movieType } from "../../../../api/tmdbApi";


//ejemplo url = https://api.themoviedb.org/3/(movie/tv)/upcoming?api_key=bc6ac22affa503f353b1d14be2f07162&language=es-AR

// const API_PELICULAS = "https://api.themoviedb.org/3/movie/"
// const APYKEY = "?api_key=bc6ac22affa503f353b1d14be2f07162";

export const getPeliculas = ()=>{
    return async (dispatch)=>{
        // const upcoming = await peliculasApi.get(`movie/upcoming${REACT_APP_APY_KEY}&language=es-AR&page=1`)
        // const popular = (await peliculasApi.get(`movie/popular${REACT_APP_APY_KEY}&language=es-AR&page=1`)).data
        const params = {}
   try {
    console.log(tmdbApi.getMoviesList)
    const upcoming = (await tmdbApi.getMoviesList(movieType.upcoming,params)).data
    const popular = (await tmdbApi.getMoviesList(movieType.popular,params)).data
    const top_rated = (await tmdbApi.getMoviesList(movieType.top_rated,params)).data
    dispatch(setPeliculas({upcoming,popular,top_rated}))
   } catch (error) {
        console.log(error)
   }

    }
}