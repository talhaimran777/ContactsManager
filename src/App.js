import React from 'react';
import './App.css';

// Let's import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Requiring in components
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
