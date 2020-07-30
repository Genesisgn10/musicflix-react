import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import CadstroVIdeo from './pages/cadastro/Video'
import CadstroCategoria from './pages/cadastro/Categoria/index'

//Desafio página 404
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      < Route path="/" component={Home} exact />
      < Route path="/cadastro/video" component={CadstroVIdeo} />
      < Route path="/cadastro/categoria" component={CadstroCategoria} />
      < Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


