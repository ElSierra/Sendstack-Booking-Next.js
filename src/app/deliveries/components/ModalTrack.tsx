import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/local/modal";
import { closeModalTrack } from "@/store/local/modalTrack";
import Timeline from "./Timeline";

export default function ModalTrack() {
  let [isOpen, setIsOpen] = useState(false);
  const modalState = useAppSelector((state) => state.modalTrack);
  const dispatch = useAppDispatch();
  function close() {
    setIsOpen(false);
    dispatch(closeModalTrack());
  }
  useEffect(() => {
    if (modalState.isOpen) {
      setIsOpen(true);
    }
  }, [modalState]);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen min-h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left  transition-all">
                  <div className="flex items-center w-full h-full flex-col">
                   
                    <div className="mt-4">
                      <Timeline/>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={close}
                      >
                        Okay
                      </button>
                    </div>
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
