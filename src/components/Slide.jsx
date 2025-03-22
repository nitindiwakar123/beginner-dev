import React from 'react';

function Slide({
    id,
    title="",
    video="",
    bio="",
    className=""
}) {
  return (
    <div className={`w-full ${className}`}>
        <div></div>
        <div className='w-full'>
            <h1>{title}</h1>
            <p>{bio}</p>
        </div>
    </div>
  )
}

export default Slide;