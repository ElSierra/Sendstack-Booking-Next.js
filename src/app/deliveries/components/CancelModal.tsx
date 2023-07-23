import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModalCancel } from "@/store/local/modalCancel";
import { useCancelDeliveryMutation } from "@/store/api/sendStackApi";
import Swal from "sweetalert2";
import cancelledUpdateState, {
  addCancelled,
} from "@/store/local/cancelledUpdateState";
import Button from "@/app/components/global/Button";
import CancelButton from "./CancelButton";

export default function CancelModal({ delivId }: { delivId: string }) {
  let [isOpen, setIsOpen] = useState(false);

  const modalState = useAppSelector((state) => state.modalCancel);
  const dispatch = useAppDispatch();
  const [cancel, cancelResponse] = useCancelDeliveryMutation();
  function close() {
    setIsOpen(false);
    dispatch(closeModalCancel());
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <div className="flex items-center flex-col">
                    <div className="mt-2">
                      Do you really want to cancel this order?
                    </div>
                    <div className="mt-4 flex gap-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent border-[#12B76A] text-[#12B76A]  px-4 py-2 text-sm font-medium"
                        onClick={close}
                      >
                        No
                      </button>
                      <CancelButton
                        loading = {cancelResponse.isLoading}
                        className="inline-flex justify-center "
                        onClick={() => {
                        
                          cancel({
                            deliveryId: delivId,
                            trackingId: modalState.id || "",
                          })
                            .unwrap()
                            .then((e) => {
                              Swal.fire({
                                title: "Success",
                                text: "Your Booking has been cancelled, you will be refunded",
                                icon: "info",
                                confirmButtonText: "Okay",
                              });
                              dispatch(addCancelled(modalState.id || ""));
                              close();
                            })
                            .catch((e) => {
                              
                              Swal.fire({
                                title: "Error",
                                text: e?.data?.message,
                                icon: "info",
                                confirmButtonText: "Okay",
                              });
                              close();
                            });
                        }}
                      >
                        Yes
                      </CancelButton>
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
