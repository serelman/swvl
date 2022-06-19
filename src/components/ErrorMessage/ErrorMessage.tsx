import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: Props) {

  return (
    <h3 className="error-message">
      { children }
    </h3>
  );
}
