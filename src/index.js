/* eslint-disable react/no-typos */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

class App extends Component {
  handleClick() {
    alert('click');
  }

  render() {
    return (
      <Fragment>
        <h1>Oie</h1>
        <Button
          onClick={() => {
            alert('Button 1');
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
