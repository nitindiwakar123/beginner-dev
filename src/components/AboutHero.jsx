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
      title: "Availablity",
      para: "Gain hands-on experience with real-world API scenarios and projects."
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
      <div className='w-full flex justify-between items-center gap-5'>
        {features?.map((feature) => (
          <div key={feature.id} className=''>
            <AboutCard
              icon={feature.icon}
              title={feature.title}
              paragraph={feature.para}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutHero