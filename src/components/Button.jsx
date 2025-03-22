import React from 'react';

function Button({
    children,
    type,
    textColor=``,
    bgColor='',
    className="",
    ...props
}) {
  return (
    <button
    type={type}
    className={`py-2 px-4 bg-[#1D4ED8] text-[#FFFFFF] ${className}`}
    {...props}
    >{children}</button>
  )
}

export default Button;