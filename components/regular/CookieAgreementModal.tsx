import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment } from 'react';
import Button from '../shared/Button';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsCookieSettingsOpen: (isOpen: boolean) => void;
}

const CookieAgreementModal: FC<Props> = ({ isOpen, setIsOpen, setIsCookieSettingsOpen }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9999999]"
          onClose={() => {
            setIsOpen(true);
          }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center mx-5">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="z-10 w-full transform max-w-[946px] transition-all relative bg-dark rounded-lg md:px-4 md:py-6 py-[60px] px-[30px] text-white text-center">
                  <div className="md:mt-4 font-medium">
                    আমাদের পৃষ্ঠাটি আপনার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করে। আপনি চাইলে তাদের
                    নিষ্ক্রিয় করতে পারেন, কিন্তু এটি ওয়েবসাইটের কিছু কার্যক্ষমতা সীমিত করতে পারে।
                    আমাদের কুকি নীতি দেখুন।
                  </div>

                  <div className="flex justify-center items-center gap-5 md:gap-[76px] mt-4 font-bold text-sm md:flex-row flex-col">
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      width={245}
                      height={56}>
                      সব কুকিজকে গ্রহণ করুন
                    </Button>

                    <Button
                      onClick={() => {
                        setIsOpen(false);
                        setIsCookieSettingsOpen(true);
                      }}
                      width={245}
                      height={56}
                      variant="popup">
                      কুকিজের সেটিংস
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CookieAgreementModal;
