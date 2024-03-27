'use client';

import { products } from '@/__mock__/products';
import CookieAgreementModal from '@/components/regular/CookieAgreementModal';
import CookieSettingsModal from '@/components/regular/CookieSettingsModal';
import ProductCard from '@/components/regular/ProductCard';
import Button from '@/components/shared/Button';

import Quote from '@/public/icons/Quote';
import Star from '@/public/icons/Star';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isCookieAgreementModalOpen, setIsCookieAgreementModalOpen] = useState(true);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[url('../public/images/mainSectionPattern.png')] bg-cover font-poppins">
        <div className="bg-black h-full w-full bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-3 md:py-[200px] py-[85px]">
          <h1 className="text-[52px] font-bold">
            মেয়াদহীন চেয়ে নামিয়ে নেওয়া টেবিল <br /> খেলার জগতে অবতীর্ণ হোন!
          </h1>

          <h2 className="text-2xl mt-4 font-medium">
            আমাদের পরিবারের সবার জন্য খেলার বিভিন্ন অভিজ্ঞতা <br /> সহ অসীম সম্ভাবনা খোলা নিন।
          </h2>

          <Button width={207} className=" mt-9 text-xl font-semibold font-montserrat">
            পর্যালোচনা
          </Button>
        </div>
      </div>

      <div className="bg-dark flex flex-col justify-center items-center text-white text-center lg:px-[150px] px-5 py-[60px] md:py-[117px]">
        <h4 className="text-[44px] font-bold -tracking-[3px]">আমাদের সম্পর্কে</h4>

        <h3 className="mt-8 -tracking-[0.2px] opacity-65 container">
          আমরা টেবিল খেলা প্রেমিক এবং তাদের গুরুত্ব সম্পর্কে সামান্য বোঝাতে চাই। আমাদের লক্ষ্য হল
          টেবিল খেলা সবার জন্য উপলব্ধ করা, বয়স, আগ্রহ বা খেলার অভিজ্ঞতা উপেক্ষা করে। আমরা সামাজিক
          যৌথভাবে খেলার শক্তি বিশ্বাস করি, যা পরিবার, বন্ধু এবং সহযোগীদের সংযোগ করে এবং উদ্যোগের উপর
          নির্ভর করে। আমরা বিশ্বের সেরা টেবিল খেলা প্রদান করার জন্য প্রয়াস করি, যা সামগ্রিক মজার
          অভিজ্ঞতা এবং নিখুত মুহূর্ত তৈরি করে। আমরা আমাদের গ্রাহকদের সন্তুষ্টির জন্য উন্নতির উপর
          ছানা করি এবং সর্বদা দায়িত্বশীল
        </h3>
      </div>

      <div className="py-[60px] md:py-20 px-10 flex items-center flex-col text-dark">
        <p className="text-[44px] font-bold">সমস্ত পণ্য অন্বেষণ করুন</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[46px] md:mt-[63px] gap-x-8 gap-y-12">
          {products.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>

        <Button
          className="mt-16 text-[17px] font-semibold -tracking-wide"
          width={200}
          height={50}
          variant="regular">
          সব পণ্য চেক করুন
        </Button>
      </div>

      <div className="bg-dark text-white lg:px-[150px] px-5 py-[60px] md:py-[100px]">
        <div className="container flex flex-col md:flex-row justify-between gap-[184px]">
          <div className="w-full flex flex-col">
            <Quote />

            <div className="flex mt-32 gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} />
              ))}
            </div>

            <p className="mt-[50px] text-2xl">
              “এই বোর্ড গেম সাইটটি অসাধারণ! বিশাল গেম সিলেকশন এবং দ্রুত ডেলিভারি। সুপারিশ করছি!“
            </p>

            <div className="grow flex items-end mt-12 text-xl font-bold">তিতাস</div>
          </div>

          <div className="w-full flex flex-col">
            <Quote />

            <div className="flex mt-32 gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} />
              ))}
            </div>

            <p className="mt-[50px] text-2xl">
              “এই বোর্ড গেম সাইটে কেনা পণ্যে খুব সন্তুষ্ট। সব সুন্দরভাবে কাজ করে, খেলা গুণগতভাবে
              ভাল। অবশ্যই আর অর্ডার করবো!”
            </p>

            <div className="grow flex items-end mt-12 text-xl font-bold">অরুণ</div>
          </div>
        </div>
      </div>

      <div className="bg-orange text-white lg:px-[150px] px-5 py-[60px] md:py-[144px]">
        <div className="container flex justify-between items-center">
          <div>
            <span className="text-[44px] font-bold md:block hidden">যোগাযোগ</span>
            <span className="text-[44px] font-bold md:hidden block">আমাদের সম্পর্কে</span>

            <div className="mt-16 text-2xl font-medium">
              10 নং স্ট্রিট <br />
              ঢাকা <br />
              বাংলাদেশ <br />
              +880 1547 881110
            </div>
          </div>

          <Image
            src="/images/mapExample.png"
            className="rounded-md md:block hidden"
            width={558}
            height={400}
            alt="map"
          />
        </div>
      </div>

      <CookieAgreementModal
        isOpen={isCookieAgreementModalOpen}
        setIsOpen={setIsCookieAgreementModalOpen}
        setIsCookieSettingsOpen={setIsCookieSettingsOpen}
      />

      <CookieSettingsModal isOpen={isCookieSettingsOpen} setIsOpen={setIsCookieSettingsOpen} />
    </div>
  );
}

