import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, Demo, Code } from "../components";

function Project() {
  const projects = useSelector((state) => state.project.projects);
  const { id } = useParams();
  const [currProject, setCurrProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    if (id && projects.length > 0) {
      const selectedProject = projects.find((project) => project.id === Number(id));
      setCurrProject(selectedProject);
    } else {
      navigate("/");
    }
  }, [projects, id, navigate]);

  return (
    <div className='w-full'>

      <Container className='mt-20'>
        <div className='w-full text-center flex flex-col justify-center items-center gap-5'>
          <h1 className='text-4xl font-semibold text-[#FFFFFF]'>{currProject && currProject.title}</h1>
          <p className='text-gray-400'>{currProject && currProject.bio}</p>
        </div>
      </Container>

      <Container className='mt-10'>
        <div className='w-full text-center mb-10'>
          <h1 className='text-4xl font-semibold text-[#FFFFFF]'>Live Demo</h1>
        </div>
        {currProject &&
          <Demo
            url={currProject.htmlPath}
            title={currProject.title}
          />}
      </Container>

      <Container className='my-20'>
      <div className='w-full text-center mb-10'>
          <h1 className='text-4xl font-semibold text-[#FFFFFF]'>Source Code</h1>
        </div>
        {currProject &&
          <Code
            id={currProject.id}
            htmlPath={currProject.htmlPath}
            cssPath={currProject.cssPath}
            jsPath={currProject.jsPath}
          />
        }
      </Container>

    </div>
  )
}

export default Project