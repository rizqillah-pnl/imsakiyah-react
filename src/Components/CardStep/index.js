import React from 'react'

export default function CardStep({desc,icon,title}) {
  return (
    <div className="w-full p-8 md:flex cardWrapper rounded-2xl bg-stepColor md:space-x-3">
      <div className="iconWrapper">
        <img src={icon} alt={desc} width={50} height={50} className="w-[50px] h-[50px]"/>
      </div>
      <div className="detailWrapper">
        <h1 className="text-base font-bold md:mb-2">{title}</h1>
        <p className='text-justify text-cardText lg:w-[376px]'>
          {desc}
        </p>
      </div>
    </div>
  );
}
