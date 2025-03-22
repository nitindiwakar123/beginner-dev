import React from 'react';
import { Hero, ProjectSwiper, Container, AboutHero } from "../components";

function Home() {
  return (
    <div className='w-full'>
      <Container>
        <Hero />
      </Container>

      <div className='w-full bg-gray-600 py-0.5 mt-20 rounded-lg'></div>

      <Container className='py-20'>
        <ProjectSwiper />
      </Container>

      <Container>
        <AboutHero />
      </Container>
    </div>
  )
}

export default Home;