import React from 'react';

const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="17"
      viewBox="0 0 19 17"
      fill="none">
      <path
        d="M9.87239 0.217958L12.5835 5.37297L18.6438 6.19982C18.8007 6.22163 18.9308 6.3247 18.9797 6.46584C19.0285 6.60698 18.9877 6.76184 18.8743 6.86554L14.4898 10.8773L15.525 16.5431C15.5522 16.6892 15.4883 16.8371 15.3601 16.9244C15.2319 17.0117 15.0618 17.0232 14.9215 16.9542L9.50062 14.2797L4.07974 16.955C3.93951 17.0243 3.76932 17.0129 3.64107 16.9256C3.51281 16.8383 3.44886 16.6904 3.47623 16.5442L4.51141 10.8773L0.12572 6.86554C0.0122904 6.76184 -0.0285411 6.60698 0.0203278 6.46584C0.0691968 6.3247 0.19933 6.22163 0.356219 6.19982L6.41655 5.37297L9.12885 0.217958C9.19787 0.0846624 9.34228 0 9.50062 0C9.65896 0 9.80337 0.0846624 9.87239 0.217958Z"
        fill="#FF9838"
      />
    </svg>
  );
};

export default Star;