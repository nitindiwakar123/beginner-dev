import React, { useId } from 'react';
import { AboutCard } from "./index";

function AboutHero() {
  const features = [
    {
      id: useId(),
      icon: <i className='fa-solid fa-graduation-cap'></i>,
      title: "Learn by Doing",
      para: "Gain hands-on experience with real-world scenarios and projects."
    },
    {
      id: useId(),
      icon: <i className='fa-solid fa-laptop'></i>,
      title: "Demo & Source Code",
      para: "Explore live demos of 50+ JavaScript projects and access their source code."
    },
    {
      id: useId(),
      icon: <i className='fa-solid fa-industry'></i>,
      title: "Industry Relevance",
      para: "Develop skills that are in high demand in the tech industry."
    },
  ];

  return (
    <div className='w-full flex flex-col justify-center items-center gap-10'>
      <div>
        <h1 className='text-4xl text-[#FFFFFF] text-center font-semibold'>Why BeginnerDev for Students?</h1>
      </div>
      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10'>
        {features?.map((feature) => (
          <AboutCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            paragraph={feature.para}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutHero