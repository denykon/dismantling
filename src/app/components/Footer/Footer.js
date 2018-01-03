import React, { Component } from 'react';

import style from './style.scss';

export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      age: 10
    }
  }

  componentDidMount() {
    let footer = this;
    return fetch('./app/data/data.json').then(function(resp) {
      resp.json().then(function(data) {
        console.log(data.users.tom);

        footer.setState({
          age: data.users.tom
        })
      });
    });
  }

  render() {
    return (
      <footer>
        Footer
        {/*<img src="app/img/100.png" alt=""/>*/}
        {this.state.age}
      </footer>
    );
  }
}