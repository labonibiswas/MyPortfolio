import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/css/Project.css";

function Projects () {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 425, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return(
      <div className="outer-box">
        <div className="inner-box">
          <Slider {...settings} className="slider-box">
              {data.map((d) => (
                <div className="data-box">
                  <div className="img">
                    <img src={d.img} alt="" className=""/>
                  </div>

                  <div className="text2">
                    <h2 className="name">{d.name}</h2>
                    <p>{d.description}</p>
                    <button className="btn">
                      <a href={d.link} target="_blank">view project</a>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
      </div>    
  );
};

const data = [
  {
    name : 'KISAAN',
    img : '/kisaan.png',
    description : 'It is an E-commerce website, where user can buy gardening related products.',
    link : "https://labonibiswas.github.io/kisaan-/"
  },
  {
    name : 'TIK-tAK-tOE',
    img : '/tik-tak-toe.png',
    description : 'It is tik-tak-toe game.',
    link : "https://labonibiswas.github.io/Tik-Tak-Toe/"
  },
  {
    name : 'project3',
    img : 'public/coming.jpg',
    description : 'Coming Soon! Stay Tuned...',
    link : "#"
  },
  {
    name : 'project4',
    img : 'public/coming.jpg',
    description : 'Coming Soon! Stay Tuned...',
    link : "#"
  },
  {
    name : 'project5',
    img : 'public/coming.jpg',
    description : 'Coming Soon! Stay Tuned...',
    link : "#"
  },
  
]

export default Projects;