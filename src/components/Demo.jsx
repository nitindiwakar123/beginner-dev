import React from 'react'

function Demo({
    url = "",
    title = "",
}) {

    return (
        <div className='w-full relative'>
            <button
                className='absolute w-[200px] top-2 right-5 cursor-pointer bg-gray-800 text-gray-400 rounded-md py-2 hover:text-white'
            >
                <a href={url} target='_blank'>
                    <span>Open in new tab</span>
                    <span className='pl-2'><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </a>
            </button>
            <iframe
                src={url}
                title={title}
                width="100%"
                height="500px"
                loading="lazy"
                allowFullScreen={true}
            ></iframe>
        </div>
    )
}

export default Demo