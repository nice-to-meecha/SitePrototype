import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='home'>
        <Link to='/'>BBS</Link>
      </div>
      <div className='about'>
        <Link to='/about'>About</Link>
      </div>
      <div className='services'>
        <Link to='/services'>Services</Link>
      </div>
      <div className='Contact'>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

