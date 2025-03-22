import React from 'react';
import { Slide } from "./index";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation} from "swiper/modules";


function ProjectSwiper() {

    const featuredProjects = [
        {
            id: 26,
            title: "Save Kangroo Game",
            video: "",
            bio: "A fun game where users help a kangaroo avoid obstacles. It's a great way to learn about game logic, animations, and event handling in JavaScript."
        },
        {
            id: 24,
            title: "Recipe Book App",
            video: "",
            bio: "A recipe book app that allows users to add, view, and delete recipes. It's a great way to learn about CRUD operations and local storage in JavaScript."
        },
        {
            id: 47,
            title: "Tic Tac Toe Game",
            video: "",
            bio: "A classic tic-tac-toe game where users can play against the computer. It's a great way to learn about game logic and JavaScript randomization."
        },
    ]

    return (
        <div className='w-full'>
            <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]} 
            className='mySwiper'
            >
                {featuredProjects?.map((project) => (
                    <SwiperSlide key={project.id}>
                        <Slide
                        id={project.id}
                        title={project.title} 
                        bio={project.bio}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProjectSwiper;