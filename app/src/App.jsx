import React from 'react';
import {Route, Switch} from 'react-router-dom';

import db from './db';

import './css/main.min.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import Post from './pages/Post';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App(props) { //Главный компонент, который рендерит другие компоненты на странице
    return (
      <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/post/:id" render={props => (<Post {...props} data={db}  />)} />
            <Route component={NotFound} />
        </Switch>
      </div>
    );
}

export default App;
