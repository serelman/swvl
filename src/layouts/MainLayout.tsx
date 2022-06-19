import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      { children }
    </div>
  );
}
