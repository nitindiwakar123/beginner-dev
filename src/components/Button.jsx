import React from 'react';

function Button({
    children,
    type,
    textColor='#FFFFFF',
    bgColor='#1D4ED8',
    className="",
    ...props
}) {
  return (
    <button
    type={type}
    className={`py-2 px-4 bg-[${bgColor}] text-[${textColor}] ${className}`}
    {...props}
    >{children}</button>
  )
}

export default Button;