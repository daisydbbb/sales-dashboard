import React from 'react';

interface ButtonProps {
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, isActive = false, children }) => {
  return (
    <button
      onClick={onClick}
      className={` ${
        isActive
          ? 'button-active'
          : 'button-inactive'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
