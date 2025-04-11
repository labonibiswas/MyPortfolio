import React from "react";
//import "/src/css/heroSection.css";


export const HeroSection = () => {
     return(
        <section>
            <div className="hero-container">
                <div className=" hero hero-grid">
                    <div className="photo">
                        <img src="/dp.jpg" />
                    </div>
                    <div className="text">
                        <div className="hello">
                            <h2>Hello</h2>
                        </div>
                        <div className="intro">
                            <h3>Myself Laboni Biswas</h3>
                            <p>I'm a passionate software developer with a strong focus on building clean, responsive, and user-friendly applications. I thrive on solving complex problems through code and am committed to continuous learning and mastering modern technologies to deliver efficient and impactful solutions.</p>
                        </div>
                        <div className="links">
                            <div><a href="/resume" className="a1" >Resume</a></div>
                            <div><a href="/Projects" className="a2">Projects</a></div>
                            <div><a href="https://www.linkedin.com/in/laboni-biswas-666a98339/" target="_blank" className="a3">Contact</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
};

export default HeroSection;