import { NavLink } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useState, } from "react";

import "../css/components/NavBar.css"

export async function clientAction() {
    ScrollTrigger.refresh();
}

export default function NavBar({ renderStmt }) {

    // const [ scrollPosition, setScrollPosition ] = useState(0);
    const navbar = useRef();

    

    renderStmt("NavBar");

    return (
        <>
            <div className="navbar" ref={navbar}>
                <div className="logo">
                    <NavLink to="/">
                        <img src="/BBS-logo.svg" />
                    </NavLink>
                </div>
                <div className="right-justified-navbar-links">
                    <div className="services-menu-opener stagger-entry">Services</div>
                    <NavLink to="/about" className="stagger-entry">About</NavLink>
                    <NavLink to="/contact" className="stagger-entry">Contact</NavLink>
                </div>
            </div>
        </>
    );
}