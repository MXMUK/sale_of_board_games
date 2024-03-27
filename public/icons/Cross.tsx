import React from 'react';

const Cross: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    className='cursor-pointer'
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none">
      <g clip-path="url(#clip0_1_1953)">
        <path d="M0.223022 0.199951L11.223 11.2" stroke="#81838C" stroke-linecap="round" />
        <path d="M11.223 0.199951L0.223022 11.2" stroke="#81838C" stroke-linecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_1953">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Cross;
