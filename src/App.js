import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

import Home from './pages/home';
import Xime from './pages/xime';
import Daro from './pages/daro';
import Lucas from './pages/lucas';

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
                <Link to="/xime">Xime</Link>
              </li>
              <li>
                <Link to="/daro">Daro</Link>
              </li>
              <li>
                <Link to="/lucas">Lucas</Link>
              </li>
            </ul>
            <hr />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/xime">
              <Xime />
            </Route>
            <Route path="/daro">
              <Daro />
            </Route>
            <Route path="/lucas">
              <Lucas />
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
