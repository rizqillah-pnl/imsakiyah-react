// import CardStep from "../Components/CardStep";
// import IcTouch from "../assets/icons/ic-interaction.png";
// import IcInput from '../assets/icons/ic-inputData.png'
// import IcConfirm from '../assets/icons/ic-confirm.png'
// import ImStep from '../assets/images/im-step.png'
import React from "react";
import TableImsakiyah from "./TableImsakiyah";


export default function Step() {
  return (
    <div className="px-8 py-20 bg-white lg:space-x-0 lg:pb-36 wrapper xl:px-99" id="step">
      <div className="flex">
        <div class="relative mt-1 rounded-md shadow-sm flex-auto">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0">
            <span class="text-gray-500 sm:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 35" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </span>
          </div>
          <input type="text" name="price" id="price" class="mt-1 block w-2/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder=" Cari . . ." />
        </div>


        <h1 className="font-bold text-center text-md md:text-2xl">
          Imsakiyah kota Lhokseumawe
        </h1>
      </div>

      <TableImsakiyah />
    </div>
  );
}
