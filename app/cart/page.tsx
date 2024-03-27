'use client';

import Button from '@/components/shared/Button';
import Cross from '@/public/icons/Cross';
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className=" bg-dark px-5 lg:px-[150px] pt-[90px] pb-[74px] text-white  min-h-[calc(100vh-330px)]">
      <div className="container">
        <div className="font-bold text-[40px]">আপনার অর্ডার করা বিষয়।</div>

        <div className="text-2xl mt-5 opacity-65">আপনার কার্টে 1 আইটেম।</div>

        <div className="grid mt-8 grid-cols-12 text-lg font-semibold">
          <div className="col-span-5">পণ্য</div>
          <div className="col-span-2">মূল্য</div>
          <div className="col-span-2">পরিমাণ</div>
          <div className="col-span-2">মোট</div>
          <div className="col-span-1"></div>
        </div>

        <div className="mt-[43px] hidden md:grid grid-cols-12 text-dark text-[19px] font-semibold bg-white rounded-lg p-5">
          <div className="col-span-1">
            <Image
              src="/images/zeus.png"
              width={80}
              height={80}
              alt="product image"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-4 flex items-center">গ্রা জিউস</div>
          <div className="col-span-2 flex items-center">BDT 6569</div>

          <div className="col-span-2 flex items-center gap-2">
            <div
              onClick={() => {
                counter > 0 && setCounter((prev) => prev - 1);
              }}
              className="size-8 bg-[#E7E9ED] rounded-full flex justify-center items-center hover:bg-opacity-65 cursor-pointer">
              -
            </div>
            <div className="border rounded w-[50px] flex justify-center ">{counter}</div>
            <div
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
              className="size-8 bg-[#E7E9ED] rounded-full flex justify-center items-center hover:bg-opacity-65 cursor-pointer">
              +
            </div>
          </div>

          <div className="col-span-2 flex items-center">BDT 6569</div>
          <div className="col-span-1 flex items-center justify-end">
            <Cross />
          </div>
        </div>

        <div className="md:hidden text-dark text-[19px] font-semibold bg-white rounded-lg px-5 pt-[40px] pb-[50px] mt-[38px]">
          <div className="">পণ্য</div>

          <div className="grid grid-cols-5 gap-y-[50px] mt-2">
            <div className="col-span-2">
              <Image
                src="/images/zeus.png"
                width={80}
                height={80}
                alt="product image"
                className="rounded-lg"
              />
            </div>
            <div className="col-span-2 flex items-center">গ্রা জিউস</div>
            <div className="col-span-1 flex items-center justify-end">
              <Cross />
            </div>

            <div className="col-span-2">মূল্য</div>
            <div className="col-span-3">BDT 6569</div>

            <div className="col-span-2">পরিমাণ </div>
            <div className="col-span-3 flex items-center gap-2">
              <div
                onClick={() => {
                  counter > 0 && setCounter((prev) => prev - 1);
                }}
                className="size-8 bg-[#E7E9ED] rounded-full flex justify-center items-center hover:bg-opacity-65 cursor-pointer">
                -
              </div>
              <div className="border rounded w-[50px] flex justify-center ">{counter}</div>
              <div
                onClick={() => {
                  setCounter((prev) => prev + 1);
                }}
                className="size-8 bg-[#E7E9ED] rounded-full flex justify-center items-center hover:bg-opacity-65 cursor-pointer">
                +
              </div>
            </div>

            <div className="col-span-2">মোট</div>
            <div className="col-span-3">BDT 6569</div>
          </div>
        </div>

        <div className="mt-[50px] md:mt-[65px] flex justify-between md:flex-row flex-col gap-[30px]">
          <Button width={200} height={64} variant="regular" className=" font-semibold">
            কেনাকাটা চালিয়ে যান
          </Button>
          <Button width={200} height={64} className=" font-semibold">
            পর্যালোচনা
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
