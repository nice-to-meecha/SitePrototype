import { Link, NavLink } from "react-router"

import "../css/components/Footer.css"

export default function Footer({ renderStmt }) {

    renderStmt("Footer");

    return (
        <>
            <footer>
                <div className="top-row">

                </div>
                <div className="bottom-row">
                    <div className="logo">
                        <NavLink to="/">
                            <svg
                                version="1.1"
                                width="481"
                                height="481"
                                viewBox="9 9 491 491"
                                preserveAspectRatio="xMidYMin slice"
                                xmlns="http://www.w3.org/2000/svg"
                            >

                                <path d="M10,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#2c365d" stroke="#bebebe"/>
                                <path d="M170,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#f49531"/>
                                <path d="M330,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#bebebe"/>
                                <path d="M490,490 v-80 l-80,80 Z" fill="#2c365d" stroke="#bebebe" />
                                <text x="90,250,410" y="490" className="BBS-text">BBS</text>
                            </svg>
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="links">
                            <div className="col">
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </div>
                            <div className="col">
                                <NavLink to="/services/accounting-department">Accounting</NavLink>
                                <NavLink to="/services/payroll">Payroll</NavLink>
                                <NavLink to="/services/advisory">Advisory</NavLink>
                                <NavLink to="/services/assurance">Assurance</NavLink>
                            </div>
                        </div>
                        <div className="contact-info">
                            <Link to="tel:+12067305715">(206) 730 5715</Link>
                            {/* 
                                TODO - make sure to either add Captcha to avoid spam for mailto: link or
                                just rely on form on Contact page
                            */}
                            <Link to="mailto:info@blantyrebusiness.com">info@blantyrebusiness.com</Link>
                        </div>
                        <div className="social-media">
                            <Link to="https://www.instagram.com/blantyre_business_services/">Instagram</Link>
                            <Link to="https://www.linkedin.com/company/blantyre-business-services-pllc/">LinkedIn</Link>
                        </div>
                        <div className="copyright">
                            © 2020-2025 Blantyre Business Services PLLC
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}