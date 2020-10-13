import React from 'react';
import './App.css';

// Let's import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Requiring in components
import Header from './components/layouts/Header';
import Contacts from './components/contacts/Contacts';
import {Provider} from './Context';

function App() {
  return (

    <Provider>
      <div className="App">
        <Header/>
        <div className="container">
          <Contacts/>
        </div>
    </div>
    </Provider>
  );
}

export default App;
