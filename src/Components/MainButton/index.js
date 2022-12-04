import React from 'react'
import PropTypes from "prop-types";
// import cx from 'classnames'
import DownloadIcon from "../../assets/icons/ic-download.png";
import { AdjustmentsIcon } from "@heroicons/react/solid";



export default function MainButton({
  filter,
  label,
  onClick,
  loading,
  type,
  secondType,
  download,
  href,
  activeBtn,
  onSubmit,
}) {
  // const buttonClass = cx({
  //   "px-5 py-3 text-base font-medium text-white bg-primary rounded-2xl ":
  //     secondType ? false : true,
  //   "px-5 py-3 text-base font-medium text-primary border border-primary rounded-2xl bg-none hover:bg-cardFeaturesHover hover:text-primary":
  //     secondType ? true : false,
  //   "bg-cardFeaturesHover": activeBtn,
  //   "flex items-center": filter
  // });
  return (
    <button
      type={type || "button"}
      onSubmit={onSubmit}
      onClick={onClick}
      href={href}
    >
      {filter && <AdjustmentsIcon className="w-5 h-5 mr-2" />}
      {download ? (
        <div className="flex items-center">
          <img
            src={DownloadIcon}
            alt="label"
            width={24}
            height={28}
            className="mr-2"
          />
          {label}
        </div>
      ) : loading ? (
        "Tunggu Sebentar..."
      ) : (
        label
      )}
    </button>
  );
}


MainButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  download: PropTypes.bool,
};




