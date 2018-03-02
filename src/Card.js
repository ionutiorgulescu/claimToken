import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ children }) => (
  <div className="Card">
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
