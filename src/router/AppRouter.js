import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { InicioComponent } from '../components/InicioComponent'
import { ArticulosComponent } from '../components/ArticulosComponent'
import { ContactoComponent } from '../components/ContactoComponent'
import { PruebaContext } from '../context/PruebaContext'

export const AppRouter = () => {
  const {usuario, setUsuario} = useContext(PruebaContext);
  const [loginText, setLoginText] = useState('');

  useEffect(() => {
    if(usuario.logueado === true) {
      setLoginText('Log out')
    } else {
      setLoginText('Log in')
    }
  }, [usuario])
  


  return (
    <BrowserRouter>
      <header className='App-header'>
        <h2>MANEJO DE CONTEXT HOOK</h2>
        <nav>
          <ul className='menu'>
            <li><NavLink to="/inicio" className={({isActive}) => isActive ? 'is-active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/articulos" className={({isActive}) => isActive ? 'is-active' : ''}>Articulos</NavLink></li>
            <li><NavLink to="/contacto" className={({isActive}) => isActive ? 'is-active' : ''}>Contacto</NavLink></li>
            <li><NavLink to="/contacto" className={({isActive}) => isActive ? 'is-active' : ''}>{loginText}</NavLink></li>
          </ul>
        </nav>
      </header>
        
      <section className='content'>
        <Routes>
            <Route path='/' element={<Navigate to='/inicio' /> } />
            <Route path='/inicio' element={ <InicioComponent/> } />
            <Route path='/articulos' element={ <ArticulosComponent/> } />
            <Route path='/contacto' element={ <ContactoComponent/> } />
            <Route path='*' element={ <h1>Error 404: Not found</h1> } />
        </Routes>

      </section>

        
    </BrowserRouter>
  )
}
