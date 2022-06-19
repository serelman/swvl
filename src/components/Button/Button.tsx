import React from 'react';

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  onClick,
  children,
}: Props) {

  return (
    <button
      onClick={onClick}
      className="button"
    >
      { children }
    </button>
  );
}
