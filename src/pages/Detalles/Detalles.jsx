import React from 'react'
import { useParams } from 'react-router-dom'
import "./Detalles.scss"

function Detalles() {
  const {id} = useParams()
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default Detalles
