import React from 'react';
import './styles/scss/App.scss'
import Cashbacks from '../src/components/Cashbacks'

function App() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img style={{ width: '30px' }} src="https://img.icons8.com/pastel-glyph/64/000000/electricity.png" />ThunderCash</a>
      </nav>
      <Cashbacks />
    </div>
  );
}

export default App;
