import React, { useState } from 'react';
import './App.css';

const TAXI_RATE_PER_KM = 1.5;

function App() {
  const [distance, setDistance] = useState('');
  const [estimatedFare, setEstimatedFare] = useState(null);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const calculateFare = () => {
    if (!isNaN(distance)) {
      const fare = parseFloat(distance) * TAXI_RATE_PER_KM;
      setEstimatedFare(fare.toFixed(2));
    } else {
      setEstimatedFare(null);
    }
  };

  return (
    <div className="App">
      <h1>Taxi Fare Estimator</h1>
      <div className="input-container">
        <label>
          Distance (in kilometers):
          <input type="text" value={distance} onChange={handleDistanceChange} />
        </label>
      </div>
      <button onClick={calculateFare}>Calculate Fare</button>
      {estimatedFare !== null && (
        <div className="result">Estimated Fare: ${estimatedFare}</div>
      )}
    </div>
  );
}

export default App;