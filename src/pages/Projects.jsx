import React, { useEffect, useState } from 'react';
import { Container, ProjectCard, SEO } from '../components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Projects() {

  const projects = useSelector((state) => state.project.projects);
  const location = useLocation();

  return (
    <div className='w-full'>

      <SEO
        title="All Javacsript Projects"
        description="Unlock Creativity with Interactive JavaScript Projects, Live Demos, and Source Code"
      />

      <Container className='mt-10'>
        <div className='w-full text-center'>
          <h1 className='text-4xl font-semibold text-[#FFFFFF]'>All Javacsript Projects</h1>
        </div>
      </Container>
      {console.log(document.title)}

      <Container className='mt-10 mb-20'>
        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10'>
          {projects?.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              bio={project.bio}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Projects;