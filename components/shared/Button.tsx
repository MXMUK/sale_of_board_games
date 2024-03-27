import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

export interface Props {
  height?: number;
  width?: number;
  variant?: string;
  className?: string;
  onClick?: (() => void) | ((e: any) => void);
}

const Button: FC<React.PropsWithChildren<Props>> = ({
  children,
  variant = 'default',
  height = 64,
  width,
  onClick,
  className = '',
  ...otherProps
}) => {
  const rootClassName = clsx(
    'rounded-xl transition-all flex justify-center items-center hover:shadow-md',
    {
      'bg-orange hover:bg-opacity-90 text-white':
        variant === 'default',
      'bg-white text-dark':
        variant === 'popup',
      'bg-white border-black border':
        variant === 'regular',
    },
    className
  );

  return (
    <button className={rootClassName} onClick={onClick} style={{ height, width }} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
