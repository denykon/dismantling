import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {Catalog} from './Catalog/Catalog';
import {About} from './About/About';

import s from './main.scss';

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="main">
          <Header/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/about" component={About}/>
          <Footer/>
        </section>
      </BrowserRouter>
    );
  }
}