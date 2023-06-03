import React, { useContext, useEffect } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const InicioComponent = () => {
const {usuario, setUsuario} = useContext(PruebaContext);

useEffect(()=>{
  setUsuario({
    id: 1,
    username: 'toby',
    password: '123',
    logueado: true
  })
}, [])


  return (
    <div>
      <h3>Inicio</h3>
      <p>Valor compartido en el context:</p>
      <p> <strong>{usuario.username}</strong></p>
      <p> <strong>{usuario.logueado}</strong></p>
    </div>
  )
}
