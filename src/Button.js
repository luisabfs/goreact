/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, type }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Salvar',
  type: 'button',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
