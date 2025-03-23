import React, {useEffect, useState} from 'react';
import { Container, ProjectCard } from '../components';
import { useSelector } from 'react-redux';

function Projects() {

  const projects = useSelector((state) => state.project.projects);  

  return (
    <div className='w-full'>
      <Container>
        All Javacsript Projects
      </Container>

      <Container className='mt-20'>
       <div className='w-full flex justify-between items-center flex-wrap gap-5'>
       {projects?.map((project) => (
          <div key={project.id} className='w-[30%]'>
            <ProjectCard 
            id={project.id}
            image={project.image}
            title={project.title}
            bio={project.bio}
            />
          </div>
        ))}
       </div>
      </Container>
    </div>
  )
}

export default Projects;