import React from 'react';
import './App.css';
import RegistrationForm from './compenents/RegistrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Our Application
        </p>
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
