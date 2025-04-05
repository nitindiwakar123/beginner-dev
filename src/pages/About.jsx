import React from 'react'
import { Container, AboutCard, AboutHero, SEO } from '../components'
import { useLocation } from 'react-router-dom';

function About() {

  const location = useLocation();
  const about = "1. Gain hands-on experience with real-world scenarios and projects, 2. Explore live demos of 50+ JavaScript projects and access their source code, 3. Develop skills that are in high demand in the tech industry.";

  return (
    <div className='w-full'>

      <SEO
        title='Why BeginnerDev for Students?'
        description={about.slice(0, 157).trim() + "..."}
      />

      {console.log(document.title)}
      <Container className='my-20'>
        <AboutHero />
      </Container>
    </div>
  )
}

export default About