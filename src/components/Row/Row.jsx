import React from "react";
import Card from "../Card/Card";
import "./Row.scss";

function Row({ title, arr = [] }) {
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  // &query=whiplash&language=es-AR&region=AR
  return (
    <div className="row-card">
      <h2>{title}</h2>
      <div>
        {arr.filter(item=> item.poster_path || item.backdrop_path).map((items,index)=><Card key={index} imgUrl={`${URL_IMG}${items.poster_path || items.backdrop_path}`}/>)}
      </div>
    </div>
  );
}

export default Row;
