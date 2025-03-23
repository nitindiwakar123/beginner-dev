import React from 'react';
import { Hero, ProjectSwiper, Container, AboutHero, Button } from "../components";

function Home() {
  return (
    <div className='w-full'>
      <Container>
        <Hero />
      </Container>

      <div className='w-full bg-gray-600 py-0.5 mt-20 rounded-lg'></div>

      <Container className='mt-20'>
        <ProjectSwiper />
      </Container>

      <Container className='mt-20'>
        <AboutHero />
      </Container>

      <div className='w-full flex justify-center items-center my-20'>
        <Button className='px-8 py-3 text-lg rounded-4xl cursor-pointer hover:scale-x-110 transition-all duration-200'>Get Started With A Random Project <i className="ml-2 fa-solid fa-arrow-right"></i></Button>
      </div>
    </div>
  )
}

export default Home;