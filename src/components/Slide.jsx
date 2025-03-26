import React from 'react';

function Slide({
    id,
    title="",
    video="",
    bio="",
    className=""
}) {
  return (
    <div className={`w-full h-full ${className}`}>
        <div className='w-full h-[80%]'>
          <img src={video} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className='w-full'>
            <h1>{title}</h1>
            <p>{bio}</p>
        </div>
    </div>
  )
}

export default Slide;