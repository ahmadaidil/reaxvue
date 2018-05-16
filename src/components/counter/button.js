import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.onClick}>
    {props.name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Button;
