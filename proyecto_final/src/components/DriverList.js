// DriverList.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const DriverList = ({ drivers }) => {
  const history = useHistory();

  const handleDriverSelect = (driver) => {
    // Navegar al perfil del conductor seleccionado
    history.push(`/perfil-conductor/${driver.id}`);
  };

  return (
    <div>
      <h2>Lista de Conductores Disponibles</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            {driver.name} -{' '}
            <button onClick={() => handleDriverSelect(driver)}>Ver Perfil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;

