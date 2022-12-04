import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/outline';
import MainButton from '../MainButton';
import React, { Fragment } from 'react'

export default function ModalLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <MainButton onClick={openModal} label="Masuk" />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between mb-5 text-lg font-bold leading-6 text-gray-900"
                  >
                    <p>Login</p>
                    <XCircleIcon
                      className="cursor-pointer w-7 h-7 hover:text-red-600"
                      onClick={() => setIsOpen(false)}
                    />
                  </Dialog.Title>
                  <div className="mt-2 space-y-5">
                    <h3 className="font-medium">Email</h3>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full p-3 border outline-none rounded-2xl focus:outline-primary focus:ring-0 focus:border-0"
                      placeholder="Masukkan Email Anda"
                    />
                    <h3 className="font-medium">Password</h3>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full p-3 border outline-none rounded-2xl focus:outline-primary focus:ring-0 focus:border-0"
                      placeholder="Masukkan Password"
                    />
                  </div>

                  <div className="w-full mt-8">
                    <MainButton label="Masuk" onClick={closeModal} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
