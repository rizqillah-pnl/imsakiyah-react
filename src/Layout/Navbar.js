import React from 'react'
import { Link } from "react-router-dom";
// import MainButton from '../Components/MainButton'
// import { MenuIcon, XIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
// import DropdownNav from '../Components/DropdownNav';
// import cx from 'classnames';
// import Disclosour from '../Components/Disclosour';
// import { Transition } from "@headlessui/react"
// import ModalLogin from '../Components/ModalLogin';


export default function Navbar({ active }) {


  // const mobileNav = cx({
  //   "z-10 fixed transition duration-300 overflow-hidden items-center flex flex-col space-y-5 font-semibold min-h-full min-w-full nav-wrapper xl:hidden mt-[58px] py-5 px-5 bg-white": true,
  // });

  // const activeNav = cx({
  //   "text-secondary nav-links": active === "home" || "imsakiyah",
  // });

  return (
    <>
      <div>
        <header
          className="fixed z-10 flex items-center justify-between w-full px-5 py-5 bg-primary xl:px-99"
          id="navbar"
        >
          <div className="font-bold text-white transition-all duration-200 logo hover:text-secondary">
            <Link to="/">RZQ x YEEDEV</Link>
          </div>
          <div className="items-center space-x-8 font-medium flex nav-links-wrapper">
            <div className={active === "beranda" ? "text-secondary font-bold" : "nav-links text-white"}>
              <Link to="/">Beranda</Link>
            </div>
            <div className={active === "imsakiyah" ? "text-secondary font-bold" : "nav-links text-white"}>
              <Link to="/imsakiyah">Imsakiyah</Link>
            </div>
          </div>
        </header>

      </div>
    </ >
  );
}
