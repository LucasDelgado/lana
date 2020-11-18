import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

import Home from './pages/home';
import SolicitudBaja from './pages/adq/solicitudBaja'
import Daro from './pages/daro'
import Logo from '../src/components/com-logo'
import Title from '../src/components/com-title'
import Image from '../src/components/com-image'
import ComLink from '../src/components/com-link'

import './App.css';

const App = () => {
  return (
    <div className="App">
        <header className="header">
          <div className="lay">
            <div className="left">
              <Logo name="la-nacion" link="#" mod="--color" title="LA NACION"/>
            </div>
            <div className="right 4xs">
              <div>
                <Image src="https://via.placeholder.com/32" alt="Nombre usuario"/>
                <div>
                  <ComLink link="#">mail@lanacion.com.ar</ComLink>
                  <span className="com-text 5xs">Estado de usuario</span>
                </div>
              </div>
              <ul className="com-list --inline">
                <li><ComLink link="#" text="Salir"/></li>
                <li><ComLink link="#" text="Ayuda"/></li>
              </ul>
            </div>
          </div>
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
        <div className="lay">
          <Title text="Ayuda:" size="xxs"/>
          <ul className="com-list --inline">
            <li><ComLink link="#" text="Preguntas frecuentes"/></li>
            <li><ComLink link="#" text="Reglamento de participación"/></li>
            <li><ComLink link="#" text="Términos y condiciones generales"/></li>
            <li><ComLink link="#" text="Términos y condiciones de Acceso Digital"/></li>
            <li><ComLink link="#" text="Políticas de privacidad"/></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
