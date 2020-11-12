import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

import Home from './pages/home';
import SolicitudBaja from './pages/adq/solicitudBaja'
import Daro from './pages/daro'

import './App.css';

const App = () => {
  return (
    <div className="App">
        <header className="header">
        <a href="https://www.lanacion.com.ar/"><i class="com-logo logo-la-nacion"></i></a>
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
      <footer className="footer">
        <strong>Ayuda:</strong>
        <ul>
          <li><a href="#" title="Preguntas frecuentes">Preguntas frecuentes</a></li>
          <li><a href="#" title="Reglamento de participación">Reglamento de participación</a></li>
          <li><a href="#" title="Términos y condiciones generales">Términos y condiciones generales</a></li>
          <li><a href="#" title="Términos y condiciones de Acceso Digital">Términos y condiciones de Acceso Digital</a></li>
          <li><a href="#" title="Políticas de privacidad">Políticas de privacidad</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
