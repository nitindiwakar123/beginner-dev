import React from 'react';
import {Button} from "./index";
import { useNavigate } from 'react-router-dom';

function ProjectCard({
    id,
    image="",
    title="",
    bio="",
}) {

    const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
        <div className='w-full flex justify-center items-center'>
            <img src={image} alt={title} className='object-cover' />
        </div>
        <div className='w-full flex flex-col gap-3'>
            <div className='w-full flex flex-col justify-center items-center gap-2 text-center'>
                <h1>{title}</h1>
                <p>{bio.substring(0, 100)}{bio.length > 100 ? '...' : ''}</p>
            </div>
            <div className='flex justify-center items-center'>
                <Button onClick={() => navigate(`/project/${id}`)}>Details</Button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard