import React from 'react'
import {motion} from "framer-motion"
import "./Modal.scss"


function Modal({estado,cambiar,children}) {
  return (
    <>
    {estado&&<motion.div  className='modal-overlay'animate={{ opacity:1 }}
  transition={{ type: "spring", stiffness: 100 , delay: 1 }}>
        {children}
    </motion.div>}
    </>
  )
}

export default Modal
