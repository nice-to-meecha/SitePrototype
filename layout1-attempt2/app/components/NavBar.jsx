import { NavLink } from "react-router";
import { useEffect } from "react";

import "../css/components/NavBar.css"

export default function NavBar({ renderStmt }) {

    if (typeof window !== "undefined") {
        // browser code
        useEffect(() => {
            if (typeof window !== 'undefined') {
              console.log('This runs only in the browser');
            }
        }, []);
        
    }
      

    renderStmt("NavBar");

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/">
                        <img src="/BBS-logo.svg" />
                    </NavLink>
                </div>
                <div className="right-justified-navbar-links">
                    <div className="services-menu-opener">Services</div>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </>
    );
}