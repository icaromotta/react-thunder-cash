import React from 'react';
import './styles/scss/App.scss'
import Cashbacks from '../src/components/Cashbacks'
import logo from './logo.svg'

function App() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warnning">
        
          <img style={{ width: '30px' }} src={logo} alt="logo" />
          <span style={{ fontWeight: 'bold', color: '#00A0E4'}}>THUNDERCASH</span> 
        
      </nav>
      <Cashbacks />
    </div>
  );
}

export default App;
