import React, { Component } from 'react';
import {Navbar} from '../../../components/Navbar/Navbar';
import {Button} from "../../../components/Button/Button";

export class Catalog extends Component {
  render() {
    return (
      <section className="catalog">
        Catalog
        <Navbar/>
        <Button text={'Hello'}/>
      </section>
    );
  }
}