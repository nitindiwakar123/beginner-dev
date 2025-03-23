import React from 'react'

function Demo({
    url = "",
    title = "",
}) {
    console.log(url);
    
    return (
        <div className='w-full flex justify-center items-center'>
            <iframe
                src={url}
                title={title}
                width="100%"
                height="500px"
                frameborder="0"
            ></iframe>
        </div>
    )
}

export default Demo