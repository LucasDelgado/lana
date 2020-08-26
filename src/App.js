import React from 'react';
import {Switch,Route,Link} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';

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
                <Link to="/about">About</Link>
              </li>
            </ul>
            <hr />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
