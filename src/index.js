import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function CadastroVideo() {
  return (
    <h1>CADASTRO VÍDEO</h1>
  );
}

function Error404() {
  return (
    <h1>NÃO EXISTE</h1>
  );
}

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route path="/" component={App} exact />
        <Route component={Error404} />
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);