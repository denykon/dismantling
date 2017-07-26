import React, { Component } from 'react';

import style from './style.scss';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <div className="left">left</div>
          <div className="center">
            <p>center</p>
            <div>center center</div>
          </div>
          <div className="right">right</div>
          <div className="next">next</div>

        </section>
        {/*<img src="app/img/100.png" alt=""/>*/}
      </footer>
    );
  }
}