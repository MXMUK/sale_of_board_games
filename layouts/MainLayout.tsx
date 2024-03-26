'use client';

import clsx from 'clsx';
import React, { memo } from 'react';
interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <header className=' bg-slate-700'>sdf</header>
      <main className={clsx(' ')}>{children}</main>
    </>
  );
};

export default memo(MainLayout);

