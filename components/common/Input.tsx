import React from 'react';


type InputProps = {
  ariaLabel?: string,
  name: string,
  type?: string,
  placeholder?: string,
  field?: any
}

const Input = ({ ariaLabel, name, type, placeholder, field, ...props }: InputProps) => (
  <input
    {...field}
    aria-label={ariaLabel}
    {...props}
    type={type}
    className="appearance-none rounded-none relative block w-full px-3 py-2 sm:py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
    placeholder={placeholder}
  />
);

export default Input;
