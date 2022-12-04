import React from 'react'
// import { Link } from 'react-router-dom';
// import cx from 'classnames'
import PropTypes from 'prop-types'


export default function DropdownNav({ hide, children }) {
  // const classes = cx({
  //   "z-10 fixed space-x-10 w-full justify-end flex ease-in-out transition-all duration-500  py-10 mt-[85px] bg-secondary px-96 text-white font-medium": true,
  // });
  return (
    <div>
      {children}
    </div>
  );
}


DropdownNav.propTypes = {
  hide: PropTypes.bool,
};


