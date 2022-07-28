import React from 'react'
import "./Card.scss"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
 
function Card({imgUrl="https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-error-404-page-not-found-png-image_2598541.jpg",id}) {
  return (<>
    <Link to={`/page/detalle/${id}`}>
    <motion.img whileHover={{transform:{traslate:"-10px"}}} className='card' draggable="false" src={imgUrl} alt="cover" />
    </Link>
  </>
  )
}

export default Card