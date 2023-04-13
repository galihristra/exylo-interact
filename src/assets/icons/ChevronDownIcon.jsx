import React from 'react';
import PropTypes from 'prop-types';

function ChevronDownIcon({ strokeColor }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.625"
        d="M11.876 5.813l-4.375 4.375-4.375-4.375"
      ></path>
    </svg>
  );
}

ChevronDownIcon.propTypes = {
  strokeColor: PropTypes.string,
};

ChevronDownIcon.defaultProps = {
  strokeColor: '#8A92A6',
};

export default ChevronDownIcon;
