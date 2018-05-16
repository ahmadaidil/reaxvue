import React, { Component, Fragment } from 'react';
import Button from '../components/counter/button';
import Count from '../components/counter/count.vue';
import store from '../stores';

export default class CounterPage extends Component {
  constructor() {
    super();
    increment = () => {
      store.commit('increment');
    };

    decrement = () => {
      store.commit('decrement');
    };
  }

  render() {
    return (
      <Fragment>
        <Button onClick={this.decrement} />
        <Count />
        <Button onClick={this.increment} />
      </Fragment>
    );
  }
}
