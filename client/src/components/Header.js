import React from 'react';
import { Link } from 'react-router-dom';
import dossasLogo from '../assets/images/TYPEFACE_WHITE.png';


const Header = () => {
  return (
    <div className='header'>
      <header>
        <Link to='/'>
          <img src={dossasLogo} alt='Dossas typeface logo' className='headerLogo'></img>
        </Link>
      </header>
      <nav>
        <ul>
          <Link to='/'>
            <li className='navItem'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='navItem'>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header