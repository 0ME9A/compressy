"use client";
import React from "react";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`cursor-pointer p-1.5 px-5 rounded-lg group border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-800 text-center bg-blue-500 ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
