import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from "react";
import logo from "../../assets/log.png"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div>
            <div className="uni_navbar" id="header">
                <div className="nav">
                    <div className="uni_navbar-links">
                        <div className="uni_navbar-links_logo logo">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                        <div className="uni_navbar-links_container">
                            <p><a href="#">Students</a></p>
                            <p><a href="#">Faculty & Staff</a></p>
                            <p><a href="#">Facilities</a></p>
                            <p><a href="#">Career</a></p>
                            <p><a href="#">Alumni</a></p>
                            <div className="uni_navbar-button">
                                <button type="button">View Campuses</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uni_navbar-menu">
                    {
                        toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {
                        toggleMenu && (
                            <div className="uni_navbar-menu_container scale-up-center">
                                <div className="uni_navbar-menu_container-links">
                                    <p><a href="#">Students</a></p>
                                    <p><a href="#">Faculty & Staff</a></p>
                                    <p><a href="#">Families</a></p>
                                    <p><a href="#">Visitors</a></p>
                                    <p><a href="#">Alumni</a></p>
                                </div>
                                <div className="uni_navbar-menu_container-links-button">
                                    <button type="button">View Campuses</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {
                document.addEventListener('scroll', () => {
                    const header = document.querySelector("#header");
                    if (window.scrollY > 500) {
                        header.classList.add("scrolled");
                    }
                    else {
                        header.classList.remove("scrolled");
                    }
                })
            }
        </div>
    )
}

export default Navbar
