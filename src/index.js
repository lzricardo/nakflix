import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";

function Error404() {
  return (
    <h1>NÃO EXISTE</h1>
  );
}

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path="/cadastro/video" component={CadastroVideo} exact/>
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
        <Route path="/" component={Home} exact/>
        <Route component={Error404}/>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);