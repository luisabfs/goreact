/* eslint-disable react/no-typos */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';

import './style.scss';

class App extends Component {
  // state = {
  //   counter: 0,
  // };

  render() {
    return <Header />;
  }
}

render(<App />, document.getElementById('app'));
