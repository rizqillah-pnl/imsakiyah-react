import React from 'react'
import cx from 'classnames'
import PropTypes from "prop-types";
import icPlay from '../../assets/icons/ic-play.png'
import IcLoad from "../../assets/icons/ic-spinner.png";



export default function SecondaryButton(props) {
  const { label, onClick, secondType, loading } = props;

  const btnClasses = cx({
    "bg-secondary": secondType ? false : true,
    "border border-secondary outline-secondary  group":
      secondType ? true : false,
  });
  return (
    <button
      type="button"
      onClick={onClick}
      className={`md:px-10 flex items-center w-full md:w-auto justify-center leading-6 py-6 text-base font-semibold text-white rounded-[16px]  ${btnClasses}`}
    >
      <div className="flex items-center transition-all duration-300 group-hover:translate-x-2">
        <img
          src={icPlay}
          alt="putar vidio"
          className={!secondType ? "hidden" : "mr-12"}
          width={36}
          height={36}
        />
        {
          loading ? <img src={IcLoad} alt="loading..." className='w-6 h-6 animate-spin' /> : label}
      </div>
    </button>
  );
}

SecondaryButton.prototype = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  secondType: PropTypes.bool,
};
