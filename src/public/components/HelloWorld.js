import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ name }) => <h1>Hello world! I am {name}. Here we go!</h1>;

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
