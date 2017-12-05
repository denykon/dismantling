import React from 'react';

import style from './style.scss';

export function Trainers(props) {
  return (
    <section className="trainers">
      <h1>{props.title}</h1>
        <ul>
          {
            props.trainers.map((item, i) =>
              <li key={i}>
                <p>{item.name}</p>
                <p>{item.position}</p>
                <a href={item.link}>{item.address}</a>
              </li>
            )
          }
        </ul>
    </section>
  );
}