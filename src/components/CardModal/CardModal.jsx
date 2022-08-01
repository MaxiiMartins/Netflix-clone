import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import "./CardModal.scss";
import { Link } from "react-router-dom";

function CardModal({ cambiar, informacion }) {
  const { title, backdrop_path, poster_path, overview, id,name } = informacion;
  const urlbg = `https://image.tmdb.org/t/p/original${
    backdrop_path || poster_path
  }`;
  const urlpf = `https://image.tmdb.org/t/p/original${
    poster_path || backdrop_path
  }`;
  return (
    <motion.div
      className="contain-prueba"
      style={{
        backgroundImage: `url(${urlbg})`
      }}
    >
      <motion.div>
      <img src={urlpf} alt="no se ve" />
      <h2>{title||name}</h2>
      </motion.div>
      <p>
        {overview !== ""
          ? overview
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem, dolores assumenda corrupti repellendus consequuntur aut voluptas a qui. Est saepe reiciendis maiores aspernatur, eius at laboriosam officia molestias facere."}
      </p>
      <motion.div className="button-icon" onClick={cambiar}>
        <GrClose size="2.5rem" />
      </motion.div>
      <Link onClick={cambiar} to={`/page/detalle/${id}`}>
        mas detalle
      </Link>
    </motion.div>
  );
}

export default CardModal;
