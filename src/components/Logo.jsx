import React from 'react'

function Logo({
    width="100px",
    className=""
}) {
  return (
    <div>
        <h1 className={`w-[${width}] ${className} text-3xl font-bold  bg-gradient-to-l from-purple-500 to-sky-300 text-transparent bg-clip-text`}>BeginnerDev</h1>
    </div>
  )
}

export default Logo