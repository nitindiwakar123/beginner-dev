import React from 'react'

function AboutCard({
    icon,
    title="",
    paragraph=""
}) {
  return (
    <div className='flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-[#60A5FA] text-4xl'>
            {icon}
        </div>
        <div className='px-5 text-center flex flex-col gap-2'>
            <h3 className='text-2xl font-semibold text-[#FFFFFF]'>{title}</h3>
            <p className='font-medium text-gray-400'>{paragraph}</p>
        </div>
    </div> 
  )
}

export default AboutCard