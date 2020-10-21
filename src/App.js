import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

import Home from './pages/home';
import SolicitudBaja from './pages/adq/solicitudBaja'
import Daro from './pages/daro'

import './App.css';

const App = () => {
  return (
    <div className="App">
        <header className="App-header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/solicitud-de-baja">Adquisición: Solicitud de Baja</Link>
              </li>
            </ul>
            <hr />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/solicitud-de-baja">
              <SolicitudBaja />
            </Route>
            <Route path="/daro">
              <Daro />
            </Route>
          </Switch>
        </main>
      <footer>
        Hola soy el footer
      </footer>
    </div>
  );
}

export default App;
