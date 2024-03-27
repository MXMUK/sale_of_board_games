import React from 'react';

const CartSimple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="22" {...props} height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cart-simple">
        <path
          id="Path"
          d="M4.72093 4.25H21L19.1395 14H6.11628L4.25581 1H1"
          stroke="#2D2D2D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          id="Oval"
          cx="7.5"
          cy="18.5"
          r="1.5"
          stroke="#2D2D2D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          id="Oval_2"
          cx="18.5"
          cy="18.5"
          r="1.5"
          stroke="#2D2D2D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default CartSimple;
