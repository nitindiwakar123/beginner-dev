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
      console.log(selectedProject);
    } else {
      navigate("/");
    }
  }, [projects, id, navigate]);

  return (
    <div className='w-full'>
      {console.log(currProject)}

      <Container className='mt-20'>
        <div className='w-full text-center flex flex-col justify-center items-center gap-5'>
          <h1 className='text-4xl font-semibold text-[#FFFFFF]'>{currProject && currProject.title}</h1>
          <p className='text-gray-400'>{currProject && currProject.bio}</p>
        </div>
      </Container>

      <Container className='mt-20'>
        {currProject &&
          <Demo
            url={currProject.link}
            title={currProject.title}
          />}
      </Container>

      <Container className='mt-20'>
        {currProject &&
          <Code
            id={currProject.id}
            path={currProject.link}
            title={currProject.title}
          />
        }
      </Container>

    </div>
  )
}

export default Project