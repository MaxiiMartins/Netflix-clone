import React from "react";
import "./Header.scss"
import logo from "../../assets/logo.webp"
import { Link ,Outlet} from "react-router-dom";

function Header() {
  return <><nav className="header">
        <Link to="/page/home"><img src={logo} draggable="false" alt="logo" /></Link>
        
    <div>
      <Link to="/page/series">Series</Link>
      <Link to="/page/peliculas">Peliculas</Link>
      {/* <Link to="/page/recent">Añadidos Recientemente</Link> */}
      <Link to="/page/mylist">Mi lista</Link>
    </div>
    {/* Va por el minuto 22:53 del vidio */}
  </nav>
  <Outlet/>
  </>;
}

export default Header;
