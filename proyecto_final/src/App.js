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

  return (
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
  );
};

export default App;
