import { configureStore } from '@reduxjs/toolkit'
import {peliculaSlice} from "./slices/Peliculas" 

export const store = configureStore({
  reducer: {
    peliculas:peliculaSlice.reducer
  },
})