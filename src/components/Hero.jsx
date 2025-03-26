import React from 'react';
import { Button } from "./index";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    return (
        <div className='w-full '>
            <div className='mt-20 w-full flex flex-col justify-center items-center gap-8'>
                <h1 className='text-5xl text-[#FFFFFF] text-center font-semibold'>Explore 50+ JavaScript Projects!</h1>
                <p className='text-2xl text-center text-gray-400'>Unlock Creativity with Interactive JavaScript Projects, Live Demos, and Source Code</p>
                <Button
                onClick={() => navigate("/projects")}
                 className='px-8 py-3 text-lg rounded-4xl cursor-pointer hover:scale-x-110 transition-all duration-200'>Get Started <i className="ml-2 fa-solid fa-arrow-right"></i></Button>
            </div>
        </div>
        
    )
}

export default Hero