import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import style from './style.scss';

export class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          {this.props.list.items.map((item, i) =>
            <li key={i}>
              <NavLink to={`/${item}`} className='btn btn-sm btn-default' activeClassName='btn-primary'>{item}</NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}