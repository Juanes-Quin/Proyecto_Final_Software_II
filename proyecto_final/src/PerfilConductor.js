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

function App() {
  return (
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
  );
}

export default App;
