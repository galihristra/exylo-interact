import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return <div className="bg-darkblue-24 rounded-md shadow-sm">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
