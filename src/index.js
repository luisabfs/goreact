/* eslint-disable react/no-multi-comp */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return <a href="">Send</a>;
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Oie</h1>
        <Button />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
