import React from 'react'
import { Disclosure } from '@headlessui/react'
import {
  ChevronDownIcon,
} from "@heroicons/react/solid";
import Proptypes from 'prop-types';


export default function Disclosour({children,label,miniCard}) {
  return (
    <Disclosure as="div" className="text-center">
      <Disclosure.Button
        className={miniCard ? "text-sm font-bold flex py-2" : "flex py-2"}
      >
        {label} <ChevronDownIcon className="w-6 h-6" />
      </Disclosure.Button>
      <Disclosure.Panel
        className={
          miniCard
            ? "xl:w-[288px] mb-5 space-y-3 font-medium text-left"
            : "mb-5 space-y-3 font-medium"
        }
      >
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
}

Disclosour.propTypes = {
  miniCard: Proptypes.bool,
  label: Proptypes.string,
}
