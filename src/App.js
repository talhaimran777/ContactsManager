import React from 'react';
import './App.css';

// Let's import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Requiring in components
import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
