import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import "/src/css/nav.css";


export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle =() => {
        setShowMenu(!showMenu);
    };

    return (
        
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <span className="circle"></span>
                        <h1>Laboni Biswas</h1>
                    </div>
                    <nav className={showMenu ? "menu-mobile": "menu-web"}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Resume">Resume</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="https://www.linkedin.com/in/laboni-biswas-666a98339/" target="_blank">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;