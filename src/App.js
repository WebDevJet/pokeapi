import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/layout/NavBar';
import './App.css';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
