import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment } from 'react';
import Button from '../shared/Button';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CookieSettingsModal: FC<Props> = ({ isOpen, setIsOpen }) => {
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
                <Dialog.Panel className="z-10 w-full transform max-w-[946px] transition-all relative bg-white rounded-lg md:px-[44px] md:py-[52px] py-[60px] px-[30px] text-dark text-center">
                  <div className="font-medium">
                    <span className="font-bold">কুকিজের সেটিংস</span>

                    <p className="mt-6">
                      কুকিস হচ্ছে সাইট দ্বারা প্রেরিত এবং ওয়েব ব্রাউজারে আপনার কম্পিউটারে সংরক্ষিত
                      ছোট ডেটা প্রতি সময় আপনি ওয়েবে অনুপ্রবেশ করছেন যাবতীয়। প্রতিটি বার্তা একটি
                      ক্ষুদ্র ফাইলের মধ্যে সংরক্ষণ করা হয়, যা কুকি বলা হয়। যখন আপনি সার্ভার থেকে
                      অন্য পৃষ্ঠা অনুরোধ করেন, আপনার ব্রাউজারটি কুকিটি আবার সার্ভারে ফিরিয়ে পাঠায়।
                      কুকিস হলো এমন একটি বিশ্বস্ত পদ্ধতি যাতে সাইটগুলি ব্যবহারকারীর সংজ্ঞা মনে রাখতে
                      বা ব্রাউজিং এর সময় ব্যবহারকারীর ক্রিয়াকলাপ নিবন্ধন করতে পারে।
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-12 font-semibold text-sm md:flex-row flex-col text-dark gap-5">
                    <Button variant="regular" width={184} height={56} className="rounded-lg">
                      <div className="flex items-center gap-4">
                        <input
                          id="checkbox1"
                          type="checkbox"
                          value=""
                          className="w-6 h-6 border-dark rounded-md accent-mint bg-grey-700"
                        />
                        <label htmlFor="checkbox1">কার্যক্ষমতা</label>
                      </div>
                    </Button>

                    <Button variant="regular" width={184} height={56} className="rounded-lg">
                      <div className="flex items-center gap-4">
                        <input
                          id="checkbox2"
                          type="checkbox"
                          value=""
                          className="w-6 h-6 border-dark rounded-md accent-mint bg-grey-700"
                        />
                        <label htmlFor="checkbox2">কার্যক্ষমতা</label>
                      </div>
                    </Button>

                    <Button variant="regular" width={184} height={56} className="rounded-lg">
                      <div className="flex items-center gap-4">
                        <input
                          id="checkbox3"
                          type="checkbox"
                          value=""
                          className="w-6 h-6 border-dark rounded-md accent-mint bg-grey-700"
                        />
                        <label htmlFor="checkbox3">কার্যক্ষমতা</label>
                      </div>
                    </Button>
                  </div>

                  <div className="flex justify-center items-center mt-12">
                    <Button onClick={() => {setIsOpen(false)}} width={245} height={56} className="font-bold rounded-lg">
                      পছন্দ নিশ্চিত করুন।
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

export default CookieSettingsModal;
