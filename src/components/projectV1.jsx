// 1. Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//import navigation arrow
import { Navigation, Pagination } from 'swiper/modules';
//pagination (dots)

// In Projects.jsx
 // <--- Ensure the component's CSS is imported

// 2. Swiper styles
import 'swiper/css';
//navigation style
import 'swiper/css/navigation';
//pagination style
import 'swiper/css/pagination';

import '../css/projectV1.css';

// Placeholder for your project data
const projects = [
  { id: 1, 
    title: 'Early Sepsis Detection ', 
    Image: '/coming.jpg', 
    description: 'Currently working on the project. It is a Deep Learning based Sepsis detection system using IoMT.', 
    liveUrl: '/', 
    githibUrl: '/' 
  },
  { id: 2, 
    title: 'TIK-TAK-tOE', 
    Image: '/tik-tak-toe.png', 
    description: 'It is MULTIPLAYER tik-tak-toe game. using web-sockets.Multiple player on same network can play simultaneously', 
    liveUrl: 'https://labonibiswas.github.io/MCA-WDD-PCA1/', 
    githibUrl: 'https://github.com/labonibiswas/MCA-WDD-PCA1.git' 
  },
  { id: 3, 
    title: 'FLAME GUARD', 
    Image: '/flame_guard.jpg', 
    description: 'It is an IOT based project which detects flame and hazardous gasses and sends an alert message to the owner.', 
    liveUrl: '/', 
    githibUrl: '/' 
  },
  { id: 4, 
    title: 'KISAAN', 
    Image: '/kisaan.png', 
    description: 'It is an E-commerce website, where user can buy gardening related products.', 
    liveUrl: 'https://labonibiswas.github.io/kisaan-/', 
    githibUrl: 'https://github.com/labonibiswas/kisaan-.git' 
  },

];

const Projects = () => {
  return (
    <div className="projects-container">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50} // Distance between slides in px
      
      breakpoints={{
        // 0px and up (Mobile): Show 1 slide
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // 768px and up (Tablet): Show 2 slides
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // 1024px and up (Laptop/Desktop): Show 3 slides
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
      }}

      navigation={true}
      // Activate the pagination feature
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          {/* This is where your actual project card component goes */}
          <div className="project-card">
            <div className='image-wrapper'>
              <img
                src={project.Image}
                alt={project.title}
                
              />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='card-buttons'>
              <a href={project.liveUrl} target="_blank" rel='noreference'>
                <button className='view-btn'>View</button>
              </a>
              <a href={project.githibUrl} target="_blank" rel='noreference' >
                <button className='github-btn'>GitHub</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Projects;