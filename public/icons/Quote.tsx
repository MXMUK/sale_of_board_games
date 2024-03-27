import React from 'react';

const Quote: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="31"
      viewBox="0 0 40 31"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.175 0H36.627L30.9924 12.4H39.4443V31H22.5404V12.4L28.175 0ZM5.63498 0H14.0869L8.4523 12.4H16.9043V31H0.000328064V12.4L5.63498 0Z"
        fill="#68D585"
      />
    </svg>
  );
};

export default Quote;
