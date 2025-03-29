import React from 'react';
import {Button} from "./index";
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';

function ProjectCard({
    id,
    image="",
    title="",
    bio="",
}) {

    const navigate = useNavigate();

  return (
    <Tilt className='w-full h-[480px] flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-400'>
        <div className='w-full h-[50%] flex justify-center items-center overflow-hidden'>
            <img src={image} alt={title} className='object-cover w-full h-[300px]' />
        </div>
        <div className='w-full h-[50%] px-4 grid grid-rows-custom-2 justify-items-start gap-4'>
            <div className='w-full h-[40%] grid grid-rows-custom-2 justify-items-start gap-2 text-center'>
                <h1 className='w-full text-2xl font-semibold text-[#FFFFFF] text-start'>{title}</h1>
                <p className='text-start text-lg text-gray-400'>{bio.substring(0, 100)}{bio.length > 100 ? '...' : ''}</p>
            </div>
            <div className='w-full flex justify-start items-center'>
                <Button
                 className='py-2 px-6 rounded-4xl cursor-pointer hover:scale-x-110 transition-all duration-200'
                 onClick={() => navigate(`/project/${id}`)}>Get demo & code</Button>
            </div>
        </div>
    </Tilt>
  )
}

export default ProjectCard