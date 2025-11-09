import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "/src/css/end.css";



export const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-items">
                    <div className="end-text">
                        <h3>phone</h3>
                        <p>+91-XXXX-XXXX</p>
                    </div>
                    <div className="end-text">
                        <h3>Email</h3>
                        <p>biswasl927@gmail.com</p>
                    </div>
                    <div className="end-text">
                        <h3>Follow Me</h3>
                        <div className="icons">
                        <a href="https://www.linkedin.com/in/laboni-biswas-666a98339/" target="_blank" className="app-logo app1">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.youtube.com/@labonivlogs6017" target="_blank" className="app-logo app2">
                        <FaYoutube />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer ;