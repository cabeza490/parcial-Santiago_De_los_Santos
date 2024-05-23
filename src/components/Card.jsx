import React from 'react'

const Card = ({formulario}) => {
  return (
    <>
      <h3>Ya veo que tu personaje favorito es {formulario.nombre}</h3>
      <h3>Y tu razón es "{formulario.porque}"</h3>
      <h2>Muy bien!</h2>
    </>
  )
}

export default Card
