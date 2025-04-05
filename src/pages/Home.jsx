import React, { useState, useEffect } from 'react';
import { Hero, ProjectSwiper, Container, AboutHero, Button, SEO } from "../components";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {

  const projects = useSelector((state) => state.project.projects);
  const [randomProject, setRandomProject] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    if (projects) {
      const rn = Math.floor(Math.random() * projects.length);
      setRandomProject(projects[rn]);
    }

  }, [projects])

  return (
    <div className='w-full'>

      <SEO
        title='Explore 50+ JavaScript Projects!'
        description='Unlock Creativity with Interactive JavaScript Projects, Live Demos, and Source Code'
      />

      <Container>
        <Hero />
      </Container>

      <div className='w-full bg-gray-600 py-0.5 mt-20 rounded-lg'></div>

      {/* <Container className='mt-20'>
        <ProjectSwiper />
      </Container> */}

      <Container className='mt-20'>
        <AboutHero />
      </Container>
      {console.log(document.title)}
      {randomProject &&
        <div className='w-full flex justify-center items-center my-20'>
          <Button
            onClick={() => navigate(`/project/${randomProject.id}`)}
            className='px-8 py-3 text-lg rounded-4xl cursor-pointer hover:scale-x-110 transition-all duration-200'>Get Started With A Random Project <i className="ml-2 fa-solid fa-arrow-right"></i></Button>
        </div>}
    </div>
  )
}

export default Home;