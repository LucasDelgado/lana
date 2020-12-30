import React from 'react';
import {Switch,Route} from "react-router-dom";

import Menu from './components/frameWork/menu'
import Home from './pages/home';
import SolicitudBaja from './pages/adq/solicitudBaja'
import VincularCredencial from './pages/adq/vincularCredencial'
import VincularCredencial2 from './pages/adq/vincularCredencial2'

import './App.css';
import Formulario from './maxi/Formulario';

const App = () => {
  return (
    <div className="App">       
          <Menu/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/solicitud-de-baja">
              <SolicitudBaja />
            </Route>
            <Route path="/vincular-credencial">
              <VincularCredencial />
            </Route>
            <Route path="/vincular-credencial-2">
              <VincularCredencial2 />
            </Route>
            <Route path="/form">
              <Formulario />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
