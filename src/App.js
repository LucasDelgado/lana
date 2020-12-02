import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

import Home from './pages/home';
import SolicitudBaja from './pages/adq/solicitudBaja'
import VincularCredencial from './pages/adq/vincularCredencial'
import VincularCredencial2 from './pages/adq/vincularCredencial2'
import Daro from './pages/daro'
import MiCuenta from './pages/miCuenta'
import Header from './pages/adq/header'
import Footer from './pages/adq/footer'

import './App.css';

const App = () => {
  return (
    <div className="App">
        <Header/>
        <main>
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
            <Route path="/daro">
              <Daro />
            </Route>
            <Route path="/mi-cuenta">
              <MiCuenta/>
            </Route>
          </Switch>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
