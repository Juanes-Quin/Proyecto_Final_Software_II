import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DriverList from './components/DriverList';


// ...

const DriverProfile = ({ drivers }) => {
  const { id } = useParams();
  console.log('ID del conductor:', id);
  const selectedDriver = drivers.find((driver) => driver.id === parseInt(id));
  console.log('Conductor seleccionado:', selectedDriver);

  if (!selectedDriver) {
    return <div>Conductor no encontrado</div>;
  }

  return (
    <div>
      <h2>Perfil del Conductor</h2>
      <img src={selectedDriver.photo} alt={selectedDriver.name} />
      <p>Nombre: {selectedDriver.name}</p>
      <p>Calificación: {selectedDriver.rating}</p>
      {/* Mostrar más detalles del perfil aquí */}
    </div>
  );
};

export default DriverProfile;