import CartSimple from '@/public/icons/CartSimple';
import Star from '@/public/icons/Star';
import { Product } from '@/types/Product';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { img, price, name, rating, id } = product;

  return (
    <div className='text-xl font-semibold'>
      <Image src={img} width={300} height={300} alt="Picture of the product" />

      <div className="mt-[14px] flex justify-between items-center">
        <span className="text-mint">BDT {price}</span>

        <CartSimple />
      </div>

      <div className="mt-4 flex justify-between items-center">
        {name}

        <div className="flex gap-1">
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
