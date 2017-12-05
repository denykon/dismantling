import React, { Component } from 'react';
import {Trainers} from "../../../components/Trainers/Trainers";
import {trainers} from "../../../data/data";

export class About extends Component {
  render() {
    return (
      <section className="about">
        <Trainers title="Best trainers" trainers={trainers.boxing}/>
      </section>
    );
  }
}