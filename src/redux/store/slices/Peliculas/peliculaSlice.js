import { createSlice } from "@reduxjs/toolkit";

export const peliculaSlice = createSlice({
    name:"peliculas",
    initialState:{
        upcoming:[],
        popular:[],
        top_rated:[],

    },
    reducers:{
        setPeliculas: (state,action)=>{
            const {upcoming,popular,top_rated} = action.payload
            state.upcoming =upcoming
            state.popular =popular
            state.top_rated =top_rated
        }
    }
})

export const {setPeliculas} = peliculaSlice.actions;
