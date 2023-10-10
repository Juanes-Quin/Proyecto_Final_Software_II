<<<<<<< HEAD
=======
<<<<<<< HEAD
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DriverList from './components/DriverList';
import DriverProfile from './components/DriverProfile';

const drivers = [
  {
    id: 1,
    name: 'Juan Pérez',
    photo: 'url_de_la_foto.jpg',
    rating: 4.5,
    // Agrega más detalles del perfil aquí
  },
  // Agrega más conductores aquí
];
=======
>>>>>>> c4c81178445c8cd283a99de89f933d214ebaacd8
import React, {  useState } from 'react'


/* import { RegistroForm} from './Componentes/RegistroForm'; */
/* import Login from './Componentes/Login'; */

import './App.css';
import { TaxiForm } from './components/TaxiForm';
import { TaxiFormProvider } from './components/TaxiFormContext';




/* function App() {
  return ( */

   /*   <React.Fragment> */

    {/* <div>
      <TaxiForm/> */}
    /* </div> */
    {/* <Inicio/> */}
    /* </React.Fragment> */
 /*  )  ; */
/* } */

// Componente principal
const App = () => {
  const [isFormVisible, setFormVisible] = useState(false);
 /*  const [isLoginVisible, setLoginVisible] = useState(false); */

  const openForm = () => {
    setFormVisible(true);
   /*  setLoginVisible(false); */
  };

  /* const openLogin = () => {
    setLoginVisible(true);
    setFormVisible(false);
  }; */

  const closeWindows = () => {
    setFormVisible(false);
    /* setLoginVisible(false); */
  };
<<<<<<< HEAD

  return (
=======
>>>>>>> adriana

  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Switch>
          {/* Ruta para mostrar la lista de conductores */}
          <Route exact path="/" render={(props) => <DriverList drivers={drivers} {...props} />} />

          {/* Ruta para mostrar el perfil del conductor */}
          <Route path="/perfil-conductor/:id" render={(props) => <DriverProfile drivers={drivers} {...props} />} />
        </Switch>
      </div>
    </Router>
=======
>>>>>>> c4c81178445c8cd283a99de89f933d214ebaacd8
    <TaxiFormProvider>
      <div className="App">
        {/* Barra de navegación */}
        <nav className="navbar">
          <div className="logo">TuLogo</div>
          <div className="nav-buttons">
        <button onClick={openForm}>Registro conductor</button>
        {/* <button onClick={openLogin}>Abrir Login</button> */}

       

        {/* El botón de cerrar ventanas solo es visible si alguna ventana está abierta */}
        {isFormVisible ? ( /* || isLoginVisible */ 
          
          <button onClick={closeWindows}>Cerrar</button>
        ) : null}
       </div>
        </nav>

        {/* Contenido de la aplicacion */}
        {isFormVisible && <TaxiForm />}
     {/*    {isLoginVisible && <Login />} */}
     </div>
    </TaxiFormProvider>
<<<<<<< HEAD
=======
>>>>>>> adriana
>>>>>>> c4c81178445c8cd283a99de89f933d214ebaacd8
  );
};

export default App;
