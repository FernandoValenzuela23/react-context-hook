import { useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './router/AppRouter';

function App() {
  const [usuario, setUsuario] = useState({
    id: 0,
    username: '',
    password: '',
    logueado: false
  })

  return (
    <PruebaContext.Provider value={ {usuario, setUsuario} }>
      <AppRouter />   
    </PruebaContext.Provider>
  );
}

export default App;
