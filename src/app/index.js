import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Main} from './pages/Main/Main';
import {Admin} from './pages/Admin/Admin';

import s from './styles/style.scss';

render((
  <BrowserRouter>
    <Switch>
      <Route path='/admin' component={Admin}/>
      <Route path='/' component={Main}/>
    </Switch>
  </BrowserRouter>

), window.document.getElementById('app'));