import React from "react";
import "./Header.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import {ImSearch} from "react-icons/im"

function Header() {
  return <nav className="header">
    <img src={logo} alt="logo" />
    <div>
      <Link to="/tvshows">Series</Link>
      <Link to="/movies">Peliculas</Link>
      <Link to="/recent">Añadidos Recientemente</Link>
      <Link to="/mylist">Mi lista</Link>
    </div>
    <ImSearch/>
  </nav>;
}

export default Header;
