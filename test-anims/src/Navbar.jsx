import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='home'>
        <Link to='/'>
          <svg version="1.1"
              width="500"
              height="500"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              id="bbs-logo-navbar">

            <path d="M10,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#2c365d"/>
            <path d="M170,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#f49531"/>
            <path d="M330,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#bebebe"/>
            <path d="M490,490 v-80 l-80,80 Z" fill="#2c365d" />
          </svg>
        </Link>
      </div>
      <div className='navbar-link'>
        <Link to='/about'>About</Link>
      </div>
      <div className='navbar-link'>
        <Link to='/services'>Services</Link>
      </div>
      <div className='navbar-link'>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

