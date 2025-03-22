import React from 'react'

function AboutCard({
    icon="",
    title="",
    paragraph=""
}) {
  return (
    <div className='flex flex-col gap-5'>
        <div>
            {icon}
        </div>
        <div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default AboutCard