/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <div className="header">
    <h1>{children}</h1>
  </div>
);

Header.defaultProps = {
  children: 'RocketBook',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
